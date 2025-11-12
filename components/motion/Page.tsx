'use client';

import { motion, type Transition } from 'framer-motion';

type PageProps = {
  children: React.ReactNode;
  className?: string;
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 8,
  },
};

const pageTransition: Transition = {
  type: 'tween',
  ease: [0.2, 0.8, 0.2, 1],
  duration: 0.42,
};

export function Page({ children, className }: PageProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}