"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MarqueeText({ 
  text = "BUILDING SCALABLE SOLUTIONS", 
  speed = 20,
  className = "" 
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Hitung lebar satu set teks
    const singleSetWidth = track.scrollWidth / 2;

    // Animasi GSAP
    const tween = gsap.to(track, {
      x: -singleSetWidth, // Geser sejauh 1 set teks
      duration: speed,
      ease: "none", // Linear, tanpa easing
      repeat: -1, // Infinite loop
    });

    return () => {
      tween.kill(); // Cleanup saat unmount
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {/* Set 1 */}
        <span className={`font-display-xl text-[120px] md:text-[240px] leading-none opacity-10 text-on-surface dark:text-on-surface px-4 ${className}`}>
          {text}
        </span>
        {/* Set 2 (duplikat untuk seamless loop) */}
        <span className={`font-display-xl text-[120px] md:text-[240px] leading-none opacity-10 text-on-surface dark:text-on-surface px-4 ${className}`}>
          {text}
        </span>
      </div>
    </div>
  );
}