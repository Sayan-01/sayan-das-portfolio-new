"use client";

import { useEffect, useRef } from "react";

const LiquidChrome = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const wave = (x: number, t: number, amp: number, freq: number, speed: number, phase: number) =>
      amp * Math.sin(x * freq + t * speed + phase);

    const wave2 = (x: number, t: number, amp: number, freq: number, speed: number, phase: number) =>
      amp * Math.cos(x * freq * 1.3 + t * speed * 0.7 + phase);

    // Bigger amplitudes + spread offsets from 0.05 to 1.0 to fill entire height
    const getY = (x: number, t: number, offset: number) => {
      const W = canvas.width;
      const H = canvas.height;
      const base = H * offset;
      return (
        base +
        wave(x / W, t, H * 0.22, 2.1, 0.4, 0) +
        wave2(x / W, t, H * 0.14, 3.5, 0.3, 1.2) +
        wave(x / W, t, H * 0.08, 6.1, 0.6, 2.5) +
        wave2(x / W, t, H * 0.05, 9.3, 0.9, 4.1)
      );
    };

    const drawScene = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Background
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, "#050510");
      bg.addColorStop(0.5, "#030308");
      bg.addColorStop(1, "#000000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Aurora blobs spread across full height
      const auroraColors = [
        { x: 0.15 + 0.1 * Math.sin(t * 0.18), y: 0.2 + 0.1 * Math.cos(t * 0.14), r: 0.55, c1: "rgba(29,78,216,0.25)", c2: "transparent" },
        { x: 0.75 + 0.1 * Math.cos(t * 0.12), y: 0.8 + 0.1 * Math.sin(t * 0.16), r: 0.55, c1: "rgba(109,40,217,0.20)", c2: "transparent" },
        { x: 0.5 + 0.08 * Math.sin(t * 0.22), y: 0.5 + 0.1 * Math.cos(t * 0.19), r: 0.6, c1: "rgba(14,165,233,0.13)", c2: "transparent" },
        { x: 0.85 + 0.05 * Math.sin(t * 0.25), y: 0.15 + 0.08 * Math.cos(t * 0.21), r: 0.4, c1: "rgba(139,92,246,0.18)", c2: "transparent" },
        { x: 0.1 + 0.06 * Math.cos(t * 0.17), y: 0.75 + 0.08 * Math.sin(t * 0.23), r: 0.45, c1: "rgba(59,130,246,0.16)", c2: "transparent" },
      ];
      for (const a of auroraColors) {
        const grd = ctx.createRadialGradient(a.x * W, a.y * H, 0, a.x * W, a.y * H, a.r * W);
        grd.addColorStop(0, a.c1);
        grd.addColorStop(1, a.c2);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      }

      // 10 wave layers spread from top (0.05) to bottom (0.97)
      const layers = [
        { offset: 0.05, alpha: 0.7, dark: 0,  tint: "rgba(59,130,246,0.08)" },
        { offset: 0.18, alpha: 0.82, dark: 2,  tint: undefined },
        { offset: 0.30, alpha: 0.87, dark: 4,  tint: "rgba(109,40,217,0.09)" },
        { offset: 0.42, alpha: 0.90, dark: 7,  tint: undefined },
        { offset: 0.53, alpha: 0.93, dark: 10, tint: "rgba(14,165,233,0.08)" },
        { offset: 0.63, alpha: 0.95, dark: 13, tint: undefined },
        { offset: 0.73, alpha: 0.97, dark: 16, tint: "rgba(30,64,175,0.10)" },
        { offset: 0.82, alpha: 0.98, dark: 19, tint: undefined },
        { offset: 0.90, alpha: 1.0,  dark: 22, tint: "rgba(88,28,135,0.12)" },
        { offset: 0.97, alpha: 1.0,  dark: 25, tint: undefined },
      ];

      layers.forEach((layer, li) => {
        const steps = Math.ceil(W / 2);
        const pts: { x: number; y: number }[] = [];
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const y = getY(x, t + li * 0.4, layer.offset);
          pts.push({ x, y });
        }

        ctx.beginPath();
        ctx.moveTo(0, H);
        ctx.lineTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          const prev = pts[i - 1];
          const curr = pts[i];
          ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
        }
        ctx.lineTo(W, H);
        ctx.closePath();

        const d = layer.dark;
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, `rgba(${14 - d},${14 - d},${22 - d},0)`);
        grad.addColorStop(0.4, `rgba(${8 - Math.min(d, 7)},${8 - Math.min(d, 7)},${14 - Math.min(d, 12)},${layer.alpha * 0.8})`);
        grad.addColorStop(1, `rgba(0,0,0,${layer.alpha})`);
        ctx.fillStyle = grad;
        ctx.fill();

        if (layer.tint) {
          ctx.fillStyle = layer.tint;
          ctx.fill();
        }

        // Crest highlight on each wave
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          const prev = pts[i - 1];
          const curr = pts[i];
          ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
        }
        const specAlpha = 0.04 + li * 0.022;
        ctx.strokeStyle = `rgba(255,255,255,${specAlpha})`;
        ctx.lineWidth = li > 7 ? 2.5 : 1.2;
        ctx.shadowColor = "rgba(200,210,255,0.6)";
        ctx.shadowBlur = li > 7 ? 20 : 10;
        ctx.stroke();
        ctx.restore();
      });

      // Specular streaks — spread across full height
      for (let s = 0; s < 12; s++) {
        const phase = (s / 12) * Math.PI * 2;
        const xStart = ((t * 0.06 + phase / (Math.PI * 2)) % 1.5 - 0.2) * W;
        const yMid = H * (0.05 + 0.9 * ((s / 12 + t * 0.04) % 1));
        const len = W * (0.10 + 0.10 * Math.sin(t * 0.3 + s));
        const opacity = 0.55 * (0.4 + 0.6 * Math.abs(Math.sin(t * 0.35 + phase)));

        const sg = ctx.createLinearGradient(xStart, yMid, xStart + len, yMid + 6);
        sg.addColorStop(0, "transparent");
        sg.addColorStop(0.45, `rgba(255,255,255,${opacity * 0.7})`);
        sg.addColorStop(0.55, `rgba(255,255,255,${opacity})`);
        sg.addColorStop(1, "transparent");

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(xStart, yMid);
        ctx.lineTo(xStart + len, yMid + 5);
        ctx.strokeStyle = sg;
        ctx.lineWidth = 0.8 + (s % 3) * 0.3;
        ctx.shadowColor = "rgba(160,200,255,0.9)";
        ctx.shadowBlur = 22;
        ctx.globalAlpha = 0.75;
        ctx.stroke();
        ctx.restore();
      }

      // Chromatic aberration on the topmost wave
      const topSteps = Math.ceil(W / 2);
      const topPts: { x: number; y: number }[] = [];
      for (let i = 0; i <= topSteps; i++) {
        const x = (i / topSteps) * W;
        topPts.push({ x, y: getY(x, t, 0.05) });
      }
      for (const [offset, color] of [[-2.5, "rgba(255,60,60,0.18)"], [2.5, "rgba(80,140,255,0.18)"]] as [number, string][]) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(topPts[0].x, topPts[0].y + offset);
        for (let i = 1; i < topPts.length; i++) {
          const p = topPts[i - 1], c = topPts[i];
          ctx.quadraticCurveTo(p.x, p.y + offset, (p.x + c.x) / 2, (p.y + c.y) / 2 + offset);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 0;
        ctx.stroke();
        ctx.restore();
      }

      // Subtle edge vignettes only — no heavy black blocks
      const topFade = ctx.createLinearGradient(0, 0, 0, H * 0.12);
      topFade.addColorStop(0, "rgba(0,0,0,0.85)");
      topFade.addColorStop(1, "transparent");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, W, H * 0.12);

      const botFade = ctx.createLinearGradient(0, H * 0.88, 0, H);
      botFade.addColorStop(0, "transparent");
      botFade.addColorStop(1, "rgba(0,0,0,0.9)");
      ctx.fillStyle = botFade;
      ctx.fillRect(0, H * 0.88, W, H * 0.12);

      t += 0.011;
      animId = requestAnimationFrame(drawScene);
    };

    animId = requestAnimationFrame(drawScene);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ display: "block" }}
    />
  );
};

export default LiquidChrome;
