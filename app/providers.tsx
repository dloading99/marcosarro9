'use client';

import { MotionConfig, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { SmoothScrollProvider } from '@/lib/smooth-scroll';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();

  return (
    <SmoothScrollProvider>
      <MotionConfig
        transition={{
          type: 'tween',
          ease: [0.2, 0.8, 0.2, 1],
          duration: 0.42,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <div key={pathname}>
            {children}
          </div>
        </AnimatePresence>
      </MotionConfig>
    </SmoothScrollProvider>
  );
}
