"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Curtain reveal animation */}
        <motion.div
          className="fixed inset-0 z-[100] bg-charcoal origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Gold accent line during transition */}
        <motion.div
          className="fixed top-1/2 left-0 right-0 h-[1px] bg-gold-accent z-[101]"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [1, 1, 1, 0] }}
          transition={{
            duration: 0.8,
            times: [0, 0.3, 0.7, 1],
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        {/* Page content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {children}
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}
