"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderStore } from "@/lib/store";
import { usePathname } from "next/navigation";

interface PageLoaderProps {
  onComplete?: () => void;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const pathname = usePathname() || "";
  const is2026 = pathname.includes("/2026");
  const { shouldShowLoader, markHomeAsVisited } = useLoaderStore();
  const [isLoading, setIsLoading] = useState(() => shouldShowLoader());

  useEffect(() => {
    const showLoader = shouldShowLoader();
    setIsLoading(showLoader);

    if (showLoader) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        markHomeAsVisited();
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
      onComplete?.();
    }
  }, [shouldShowLoader, markHomeAsVisited, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center"
          style={{
            background: `
              linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #2563eb 50%, #1e40af 75%, #1e3a8a 100%),
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.2) 0%, transparent 50%)
            `,
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="loader-grid"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <path
                    d="M 0 0 L 0 1 L 8 1"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loader-grid)" />
            </svg>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2,
              }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="text-white">
                <motion.h1
                  className="text-3xl font-bold tracking-wider"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  IC-AISIS
                </motion.h1>
                <motion.p
                  className="text-blue-200 text-lg font-medium"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {is2026 ? "2026" : "2027"}
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.8,
              }}
              className="text-center max-w-2xl"
            >
              <h2 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">
                {is2026 ? "International Conference on" : "2nd International Conference on"}
              </h2>
              <h3 className="text-lg md:text-xl text-blue-200 font-medium mb-4">
                Artificial Intelligence for Sustainability and Intelligent
                Systems
              </h3>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-sm">{is2026 ? "January 24, 2026" : "July 2–3, 2027"}</span>
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-sm">NMAMIT, Nitte</span>
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="mt-12 flex flex-col items-center"
            >
              <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.3,
                  }}
                />
              </div>

              <motion.p
                className="text-blue-200 text-sm font-medium"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Loading Conference Experience...
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
                delay: 1.4,
              }}
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
