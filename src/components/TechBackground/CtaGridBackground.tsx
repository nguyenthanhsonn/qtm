"use client";

import React, { useEffect, useRef } from "react";

export default function CtaGridBackground() {
  const gridSize = 48; // Grid size 48px
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 14 floating highlight tech blocks with vibrant gradients and smooth floating
  const highlights = [
    { left: "8%", top: "14%", size: 48, duration: "5.5s", delay: "0s", y: 14 },
    { left: "26%", top: "32%", size: 48, duration: "6.8s", delay: "-1.8s", y: -12 },
    { left: "44%", top: "10%", size: 48, duration: "7.2s", delay: "-1.2s", y: -16 },
    { left: "62%", top: "24%", size: 48, duration: "5.9s", delay: "-2.6s", y: 15 },
    { left: "82%", top: "18%", size: 48, duration: "4.8s", delay: "-0.4s", y: 10 },
    { left: "92%", top: "42%", size: 48, duration: "6.4s", delay: "-3.5s", y: -12 },
    { left: "14%", top: "54%", size: 48, duration: "8.0s", delay: "-2.5s", y: -18 },
    { left: "34%", top: "68%", size: 48, duration: "6.1s", delay: "-4.2s", y: 14 },
    { left: "54%", top: "82%", size: 48, duration: "5.4s", delay: "-0.9s", y: -11 },
    { left: "74%", top: "62%", size: 48, duration: "6.3s", delay: "-3.1s", y: 13 },
    { left: "88%", top: "78%", size: 48, duration: "6.8s", delay: "-0.8s", y: -12 },
    { left: "4%", top: "82%", size: 48, duration: "5.2s", delay: "-4.0s", y: 15 },
    { left: "78%", top: "46%", size: 48, duration: "4.5s", delay: "-2.1s", y: -10 },
    { left: "22%", top: "86%", size: 48, duration: "7.0s", delay: "-1.5s", y: 12 },
  ];

  // Keyframes for floating blocks and laser scan line
  const cssKeyframes = `
    ${highlights.map((h, i) => `
      @keyframes float-h-${i} {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.85; }
        50% { transform: translateY(${h.y}px) scale(1.05); opacity: 1; }
      }
    `).join("")}

    @keyframes laserGridScan {
      0% { transform: translateY(-100%); opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      100% { transform: translateY(1000%); opacity: 0; }
    }
  `;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // --- Sóng 1: Sóng hạt màu Cyan sáng (#38CFC8) ---
      const numPointsWave1 = 48;
      ctx.fillStyle = "rgba(56, 207, 200, 0.85)";

      for (let i = 0; i <= numPointsWave1; i++) {
        const x = (width / numPointsWave1) * i;
        const y = height * 0.58 + Math.sin(i * 0.2 + phase) * 26;

        // Hạt tròn phát sáng đậm
        ctx.beginPath();
        ctx.arc(x, y, 3.8, 0, Math.PI * 2);
        ctx.fill();

        // Dây quét rơi rõ hơn
        ctx.fillStyle = "rgba(56, 207, 200, 0.16)";
        ctx.fillRect(x - 1, y + 4, 2, height - y);
        ctx.fillStyle = "rgba(56, 207, 200, 0.85)";
      }

      // --- Sóng 2: Hạt màu Deep Ocean (#17398F) uốn lệch pha 3D ---
      const numPointsWave2 = 38;
      ctx.fillStyle = "rgba(23, 57, 143, 0.65)";

      for (let i = 0; i <= numPointsWave2; i++) {
        const x = (width / numPointsWave2) * i;
        const y = height * 0.65 + Math.cos(i * 0.16 + phase * 0.85) * 32;

        ctx.beginPath();
        ctx.arc(x, y, 4.2, 0, Math.PI * 2);
        ctx.fill();

        // Constellation lines giữa 2 làn sóng
        if (i % 2 === 0) {
          const correspondingX1 = (width / numPointsWave1) * Math.min(Math.round(i * (numPointsWave1 / numPointsWave2)), numPointsWave1);
          const correspondingY1 = height * 0.58 + Math.sin(correspondingX1 * (numPointsWave1 / width) * 0.2 + phase) * 26;
          ctx.strokeStyle = "rgba(32, 149, 173, 0.28)";
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(correspondingX1, correspondingY1);
          ctx.stroke();
        }
      }

      phase += 0.009;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-white" aria-hidden="true">
      <style>{cssKeyframes}</style>

      {/* Lớp overlay Grid Pattern ĐẬM NÉT RÕ RỆT (Teal Blue #2095AD opacity ~45%) */}
      <div className="absolute inset-0 opacity-[0.45] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-grid-pattern"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                fill="none"
                stroke="#2095AD"
                strokeWidth="1.5"
              />
              {/* Chấm điểm giao cắt kỹ thuật số (Crosshair nodes) */}
              <circle cx="0" cy="0" r="2.2" fill="#2095AD" />
              <circle cx={gridSize} cy="0" r="2.2" fill="#2095AD" />
              <circle cx="0" cy={gridSize} r="2.2" fill="#2095AD" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" />
        </svg>
      </div>

      {/* Dải Laser Scanline quét công nghệ trôi từ trên xuống */}
      <div
        className="absolute left-0 right-0 h-[120px] z-0 pointer-events-none opacity-80"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(56, 207, 200, 0.4) 50%, transparent 100%)",
          borderBottom: "2px solid rgba(56, 207, 200, 0.8)",
          filter: "drop-shadow(0 0 14px rgba(56, 207, 200, 0.6))",
          animation: "laserGridScan 8s infinite linear",
        }}
      />

      {/* Các ô vuông highlight trôi nổi ĐẬM & NỔI BẬT (14 ô) */}
      {highlights.map((h, i) => (
        <div
          key={`h-${i}`}
          className="absolute z-0"
          style={{
            left: h.left,
            top: h.top,
            width: `${h.size}px`,
            height: `${h.size}px`,
            background: "linear-gradient(135deg, rgba(56, 207, 200, 0.5) 0%, rgba(32, 149, 173, 0.15) 100%)",
            border: "1.8px solid rgba(56, 207, 200, 0.5)",
            boxShadow: "0 0 16px rgba(56, 207, 200, 0.35)",
            animation: `float-h-${i} ${h.duration} ease-in-out infinite`,
            animationDelay: h.delay,
            transformOrigin: "center center",
          }}
        />
      ))}

      {/* Canvas Sóng Hạt Kỹ thuật số uốn lượn */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ opacity: 1 }}
      />
    </div>
  );
}
