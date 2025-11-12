'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        type: 'tween',
        ease: [0.2, 0.8, 0.2, 1],
        duration: 0.8,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
