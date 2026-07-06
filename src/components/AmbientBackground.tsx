import { motion, useScroll, useTransform } from 'motion/react';

export default function AmbientBackground() {
  const { scrollY } = useScroll();
  
  // Create beautiful, hardware-accelerated parallax transformations
  const yOrb1 = useTransform(scrollY, [0, 1000], [0, 180]);
  const yOrb2 = useTransform(scrollY, [0, 1000], [0, 120]);
  const yOrb3 = useTransform(scrollY, [0, 1000], [0, 220]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Orb 1: Indigo-500 (Mapped from gold-500) */}
      <motion.div
        className="absolute rounded-full filter blur-[100px] bg-gold-500/10 dark:bg-gold-500/15 w-[320px] h-[320px] -top-[80px] -left-[80px]"
        style={{
          y: yOrb1,
        }}
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -15, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Orb 2: Deep Violet */}
      <motion.div
        className="absolute rounded-full filter blur-[100px] bg-violet-600/8 dark:bg-violet-600/12 w-[280px] h-[280px] -bottom-[40px] -right-[40px]"
        style={{
          y: yOrb2,
        }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Orb 3: Slate / Deep Indigo */}
      <motion.div
        className="absolute rounded-full filter blur-[100px] bg-gold-700/8 dark:bg-gold-700/12 w-[220px] h-[220px] top-[40%] right-[12%]"
        style={{
          y: yOrb3,
        }}
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
