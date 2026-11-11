"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/scss/home/HomeHero.module.scss";

const VIMEO_ORIGIN = "https://player.vimeo.com";
const VIDEO_URL = `${VIMEO_ORIGIN}/video/1245676929?h=85c75da69e&playsinline=1&loop=1`;
const BACKGROUND_URL = `${VIDEO_URL}&autoplay=0&muted=1&controls=0&preload=auto`;
const MANUAL_PLAYBACK_URL = `${VIDEO_URL}&autoplay=0&controls=1&play_button_position=center`;
const POSITION_KEY = "qtm:home-video:1245676929";
const MUTE_PREFERENCE_KEY = `${POSITION_KEY}:muted`;
let lastPosition = 0;

function readPosition() {
  try {
    const stored = sessionStorage.getItem(POSITION_KEY);
    const seconds = Number(stored);
    if (stored !== null && Number.isFinite(seconds) && seconds >= 0) return seconds;
  } catch {
    // Keep the position in memory if storage is unavailable.
  }
  return lastPosition;
}

function savePosition(seconds: number) {
  lastPosition = seconds;
  try {
    sessionStorage.setItem(POSITION_KEY, String(seconds));
  } catch {
    // The in-memory position still survives navigation within the site.
  }
}

export default function HomeBackgroundVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [manualStartTime, setManualStartTime] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const manualPlayback = manualStartTime !== null;

  useEffect(() => {
    const iframe = iframeRef.current;
    const player = iframe?.contentWindow;
    if (!iframe || !player) return;

    let ready = false;
    let requestedPlayback = false;
    let hasStarted = false;
    let warmingUp = false;
    let tryingAudibleAutoplay = false;
    let audibleFallback: number | undefined;
    let fallback: number | undefined;
    let preferMuted = false;
    try {
      preferMuted = sessionStorage.getItem(MUTE_PREFERENCE_KEY) === "true";
    } catch {
      // Use the default sound preference when storage is unavailable.
    }
    const startPosition = manualStartTime ?? readPosition();
    const playerUrl = manualPlayback ? `${MANUAL_PLAYBACK_URL}&muted=${Number(preferMuted)}` : BACKGROUND_URL;
    const source = `${playerUrl}#t=${Math.floor(startPosition)}s`;
    let position = startPosition;
    let savedPosition = position;

    const persist = () => savePosition(position);
    const enableManualPlayback = () => setManualStartTime(position);
    const retryMutedAutoplay = () => {
      if (!tryingAudibleAutoplay) return;

      tryingAudibleAutoplay = false;
      window.clearTimeout(audibleFallback);
      player.postMessage({ method: "setMuted", value: true }, VIMEO_ORIGIN);
      player.postMessage({ method: "play" }, VIMEO_ORIGIN);
    };
    const startWhenReady = () => {
      if (manualPlayback || document.documentElement.dataset.introFinished !== "true") return;

      fallback ??= window.setTimeout(enableManualPlayback, 8000);
      if (!ready || requestedPlayback) return;

      requestedPlayback = true;
      if (!preferMuted) {
        tryingAudibleAutoplay = true;
        audibleFallback = window.setTimeout(retryMutedAutoplay, 3000);
        player.postMessage({ method: "setMuted", value: false }, VIMEO_ORIGIN);
      } else {
        player.postMessage({ method: "play" }, VIMEO_ORIGIN);
      }
    };

    const onPlayerMessage = (message: MessageEvent) => {
      if (message.origin !== VIMEO_ORIGIN || message.source !== player) return;

      let payload;
      try {
        payload = typeof message.data === "string" ? JSON.parse(message.data) : message.data;
      } catch {
        return;
      }

      if (!ready && (payload?.event === "ready" || payload?.method === "ping")) {
        ready = true;
        player.postMessage({ method: "addEventListener", value: "timeupdate" }, VIMEO_ORIGIN);
        player.postMessage({ method: "addEventListener", value: "volumechange" }, VIMEO_ORIGIN);
        if (!manualPlayback && document.documentElement.dataset.introFinished !== "true") {
          warmingUp = true;
          player.postMessage({ method: "play" }, VIMEO_ORIGIN);
        } else {
          startWhenReady();
        }
      }

      if (warmingUp && payload?.event === "timeupdate" && payload.data?.seconds > 0) {
        warmingUp = false;
        if (!requestedPlayback) {
          player.postMessage({ method: "pause" }, VIMEO_ORIGIN);
          player.postMessage({ method: "setCurrentTime", value: startPosition }, VIMEO_ORIGIN);
        }
      }

      if (payload?.event === "timeupdate" && payload.data?.seconds > 0 && (requestedPlayback || manualPlayback)) {
        position = payload.data.seconds;
        if (Math.abs(position - savedPosition) >= 1) {
          persist();
          savedPosition = position;
        }
        if (!hasStarted) {
          hasStarted = true;
          tryingAudibleAutoplay = false;
          window.clearTimeout(audibleFallback);
          window.clearTimeout(fallback);
          setPlaying(true);
        }
      }

      if (payload?.event === "volumechange" && typeof payload.data?.muted === "boolean") {
        setMuted(payload.data.muted);
      }

      if (tryingAudibleAutoplay && payload?.method === "setMuted" && payload.value === false) {
        player.postMessage({ method: "play" }, VIMEO_ORIGIN);
      }

      if (requestedPlayback && payload?.event === "error" && ["play", "setMuted"].includes(payload.data?.method)) {
        if (tryingAudibleAutoplay) retryMutedAutoplay();
        else enableManualPlayback();
      }
    };

    window.addEventListener("message", onPlayerMessage);
    window.addEventListener("intro-finished", startWhenReady);
    window.addEventListener("pagehide", persist);
    if (iframe.src !== source) iframe.src = source;
    else player.postMessage({ method: "ping" }, VIMEO_ORIGIN);
    startWhenReady();

    return () => {
      window.clearTimeout(audibleFallback);
      window.clearTimeout(fallback);
      window.removeEventListener("message", onPlayerMessage);
      window.removeEventListener("intro-finished", startWhenReady);
      window.removeEventListener("pagehide", persist);
      persist();
    };
  }, [manualPlayback, manualStartTime]);

  function toggleSound() {
    const player = iframeRef.current?.contentWindow;
    const nextMuted = !muted;
    try {
      sessionStorage.setItem(MUTE_PREFERENCE_KEY, String(nextMuted));
    } catch {
      // The sound toggle still works without storage.
    }
    player?.postMessage({ method: "setMuted", value: nextMuted }, VIMEO_ORIGIN);
    if (muted) player?.postMessage({ method: "play" }, VIMEO_ORIGIN);
  }

  return (
    <>
      <div className={styles.videoTrack}>
        <div className={styles.sectionBgVideo} data-manual-playback={manualPlayback ? "" : undefined}>
          <iframe
            key={manualPlayback ? "manual" : "background"}
            ref={iframeRef}
            title="Video giới thiệu QTM MediaTech"
            allow="autoplay"
            aria-hidden={!manualPlayback}
            inert={!manualPlayback}
            tabIndex={manualPlayback ? 0 : -1}
            onLoad={() => iframeRef.current?.contentWindow?.postMessage({ method: "ping" }, VIMEO_ORIGIN)}
          />
        </div>
      </div>
      {playing && !manualPlayback && (
        <div className={`${styles.videoTrack} ${styles.videoSoundTrack}`}>
          <div className={styles.videoSoundPosition}>
            <button
              className={styles.videoSoundButton}
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Bật tiếng video" : "Tắt tiếng video"}
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                {muted ? <path d="m16 9 6 6m0-6-6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13" />}
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
