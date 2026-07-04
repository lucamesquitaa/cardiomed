'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partners = [
  { src: '/images/partner-randmed.png',       alt: 'Rand', w: 160, h: 60 },
  { src: '/images/partner-biotronik.png',     alt: 'Biotronik',                       w: 144, h: 50 },
  { src: '/images/partner-medinol.png',       alt: 'Medinol',                         w: 150, h: 66 },
  { src: '/images/partner-merit-medical.png', alt: 'Merit Medical',                   w: 160, h: 66 },
  { src: '/images/partner-microport.png',     alt: 'MicroPort',                       w: 150, h: 60 },
  { src: '/images/boyton-partner.png',     alt: 'Boyton',                       w: 100, h: 60 }
];

// 4 copies ensures the track is wide enough for any common viewport
const COPIES = 4;
const GAP_PX = 80; // 5rem
const SPEED = 0.6; // px per frame @ ~60 fps ≈ 36 px/s

export default function PartnerMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    let rafId: number;
    let paused = false;

    const step = () => {
      if (!paused) {
        // Recalculate each frame so it stays accurate if fonts/images shift layout
        const setWidth = track.scrollWidth / COPIES;
        pos -= SPEED;
        if (pos <= -setWidth) pos += setWidth;
        track.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    const container = track.parentElement;
    
  }, []);

  const allLogos = Array.from({ length: COPIES }, () => partners).flat();

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <div
        ref={trackRef}
        className="flex items-center"
        style={{ width: 'max-content' }}
      >
        {allLogos.map((p, i) => (
          <Image
            key={i}
            src={p.src}
            alt={p.alt}
            width={p.w}
            height={p.h}
            className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
            style={{ width: `${p.w}px`, height: `${p.h}px`, objectFit: 'contain', marginRight: `${GAP_PX}px` }}
          />
        ))}
      </div>
    </div>
  );
}
