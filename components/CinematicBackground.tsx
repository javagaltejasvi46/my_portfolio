"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const BG_IMAGES = [
  { src: "/bg_images/1.png", alt: "Tejasvi Javagal - Conceptualizing & Architecture", position: "50% 15%" },
  { src: "/bg_images/2.png", alt: "Tejasvi Javagal - Engineering & Building Systems", position: "50% 0%" },
  { src: "/bg_images/3.png", alt: "Tejasvi Javagal - Solving Complex Problems", position: "50% 10%" },
  { src: "/bg_images/4.png", alt: "Tejasvi Javagal - Shipping Production Products", position: "50% 10%" },
  { src: "/bg_images/5.png", alt: "Tejasvi Javagal - Continuous Innovation & Scale", position: "50% 12%" },
];

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function CinematicBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload all 5 images on mount
  useEffect(() => {
    BG_IMAGES.forEach((item) => {
      const img = new window.Image();
      img.src = item.src;
    });
  }, []);

  // Track page scroll progress accurately from 0 to 1
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight <= 0) {
            setScrollProgress(0);
          } else {
            const current = window.scrollY / docHeight;
            setScrollProgress(clamp(current, 0, 1));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Map 0 -> 1 progress into 5 smooth overlapping zones
  // 5 parts:
  // Part 1: [0.00, 0.20]
  // Part 2: [0.20, 0.40]
  // Part 3: [0.40, 0.60]
  // Part 4: [0.60, 0.80]
  // Part 5: [0.80, 1.00]
  const layers = useMemo(() => {
    const numImages = BG_IMAGES.length;
    // Map progress into index range [0, 4]
    const continuousIndex = scrollProgress * (numImages - 1);

    return BG_IMAGES.map((img, i) => {
      // Distance from the current continuous index
      const dist = Math.abs(continuousIndex - i);
      
      // Calculate opacity: 1 when exactly at index, smoothly fading out over 1 unit distance
      let opacity = 0;
      if (dist < 1.0) {
        const t = easeInOut(1.0 - dist);
        opacity = t;
      }

      // Subtle scale and blur for cinematic depth
      const scale = 1.0 + (1 - opacity) * 0.035;
      const blur = (1 - opacity) * 3;

      return {
        ...img,
        opacity: Math.round(opacity * 1000) / 1000,
        transform: `scale(${Math.round(scale * 1000) / 1000})`,
        filter: blur > 0.1 ? `blur(${Math.round(blur * 10) / 10}px)` : "none",
        visible: opacity > 0.005,
      };
    });
  }, [scrollProgress]);

  return (
    <div className="cinematic-bg-container" aria-hidden="true">
      {layers.map((layer, index) => (
        <div
          key={layer.src}
          className="cinematic-bg-layer"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: layer.opacity,
            transform: layer.transform,
            filter: layer.filter,
            visibility: layer.visible ? "visible" : "hidden",
            zIndex: index + 1,
          }}
        >
          <Image
            src={layer.src}
            alt={layer.alt}
            fill
            priority
            sizes="100vw"
            className="cinematic-bg-img"
            style={{
              objectPosition: layer.position,
            }}
          />
        </div>
      ))}

      {/* Cinematic dark gradients & lighting overlays for ultra-clean readability */}
      <div className="cinematic-bg-vignette"></div>
      <div className="cinematic-bg-grid"></div>
    </div>
  );
}
