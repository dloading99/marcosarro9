'use client';

import { motion } from 'framer-motion';

type MButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function MButton({ children, className }: MButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
