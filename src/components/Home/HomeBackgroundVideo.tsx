"use client";

import styles from "@/scss/home/HomeHero.module.scss";

const VIDEO_URL =
  "https://player.vimeo.com/video/1247480445?background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&playsinline=1";

export default function HomeBackgroundVideo() {
  return (
    <div className={styles.videoTrack}>
      <div className={styles.sectionBgVideo}>
        <iframe
          title="Video giới thiệu QTM MediaTech"
          src={VIDEO_URL}
          allow="autoplay; fullscreen"
          aria-hidden
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
