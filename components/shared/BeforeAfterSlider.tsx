'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="bg-white rounded-card shadow-card overflow-hidden">
      {title && (
        <div className="p-6 border-b border-smoke">
          <h3 className="font-heading font-bold text-xl">{title}</h3>
        </div>
      )}
      <div
        className="relative aspect-video cursor-ew-resize select-none"
        onMouseMove={handleMove}
      >
        <div className="absolute inset-0">
          <Image src={afterImage} alt="After" fill className="object-cover" />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={beforeImage} alt="Before" fill className="object-cover" />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-primary"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-ink rounded-full"></div>
              <div className="w-1 h-6 bg-ink rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-ink/80 text-onDark px-3 py-1 rounded-full text-sm font-medium">
          Prima
        </div>
        <div className="absolute top-4 right-4 bg-primary/90 text-ink px-3 py-1 rounded-full text-sm font-medium">
          Dopo
        </div>
      </div>
    </div>
  );
}
