'use client';

import { useEffect, useRef } from 'react';

export function AnimatedGridBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Grid parameters
    const gridSize = 60;
    const lineColor = '#0052cc'; // Blue accent color
    const maxOpacity = 0.15;
    let animationTime = 0;

    // Store line states for smooth animation
    const lines: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      phase: number;
    }[] = [];

    // Create grid lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      lines.push({ x1: x, y1: 0, x2: x, y2: canvas.height, phase: Math.random() * Math.PI * 2 });
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      lines.push({ x1: 0, y1: y, x2: canvas.width, y2: y, phase: Math.random() * Math.PI * 2 });
    }

    const animate = () => {
      // Clear canvas with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationTime += 0.02;

      // Draw lines with fading animation
      lines.forEach((line) => {
        // Use sine wave for smooth fade in/out
        const opacity = Math.abs(Math.sin(animationTime + line.phase)) * maxOpacity;

        ctx.strokeStyle = lineColor;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;

      // Add subtle glow/intersection points
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const opacity = Math.abs(Math.sin(animationTime + (x + y) * 0.001)) * (maxOpacity * 0.7);
          ctx.fillStyle = lineColor;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-100 pointer-events-none"
      style={{ background: '#ffffff' }}
    />
  );
}
