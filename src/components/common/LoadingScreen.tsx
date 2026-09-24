"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Background glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-violet-500/8 dark:bg-violet-400/8 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex flex-col items-center gap-6 relative z-10">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25 animate-glow-pulse"
              animate={{
                rotate: [0, 180, 360],
                borderRadius: ["16px", "50%", "16px"],
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
            >
              <span className="text-white font-bold text-lg select-none">
                JV
              </span>
            </motion.div>

            <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full progress-gradient rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
