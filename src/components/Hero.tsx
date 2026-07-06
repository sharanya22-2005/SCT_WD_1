import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Code, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { ProfileData } from '../types';
import { motion } from 'motion/react';

interface HeroProps {
  profile: ProfileData;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export default function Hero({ profile, onNavigateToProjects, onNavigateToContact }: HeroProps) {
  const words = ['Web Developer', 'UI/UX Enthusiast', 'Problem Solver'];
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Self-contained high-performance typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      timer = setTimeout(tick, isDeleting ? 40 : 100);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.94, rotate: -1 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="pt-24 pb-12 min-h-[85vh] flex items-center justify-center relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full max-w-6xl mx-auto text-left"
      >
        {/* Copy Column */}
        <div className="space-y-6">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-gold-400 tracking-wider uppercase">
              Hello, I’m
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6.5xl font-semibold font-serif leading-[1.1] tracking-tight text-white dark:text-white light-mode:text-neutral-900"
          >
            {profile.name || 'Sharanya'}
            <span className="text-gold-500 font-light">.</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="h-8 flex items-center"
          >
            <p className="text-lg sm:text-xl font-medium text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700">
              I'm a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 font-serif italic font-semibold border-r-2 border-gold-500/80 pr-1 animate-[pulse_1s_infinite]">
                {typedText}
              </span>
            </p>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 leading-relaxed max-w-2xl font-light"
          >
            {profile.bio ||
              'I design and develop thoughtful, responsive web experiences that balance performance, usability, and polished visual storytelling.'}
          </motion.p>

          {/* Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={onNavigateToProjects}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 font-bold text-sm rounded-full shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={onNavigateToContact}
              className="flex items-center gap-2 px-6 py-3 bg-neutral-900/40 dark:bg-neutral-950/40 border border-neutral-800/80 dark:border-neutral-800/60 text-neutral-200 dark:text-neutral-200 light-mode:text-neutral-800 hover:text-white dark:hover:text-white light-mode:hover:text-black hover:border-gold-500/50 font-semibold text-sm rounded-full hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 pt-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-neutral-800/60 dark:border-neutral-800/50 bg-neutral-900/50 dark:bg-neutral-900/30 text-neutral-400">
              <Code className="w-3.5 h-3.5 text-gold-500" />
              Responsive UI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-neutral-800/60 dark:border-neutral-800/50 bg-neutral-900/50 dark:bg-neutral-900/30 text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              Creative Frontend
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-neutral-800/60 dark:border-neutral-800/50 bg-neutral-900/50 dark:bg-neutral-900/30 text-neutral-400">
              <UserCheck className="w-3.5 h-3.5 text-gold-500" />
              Problem Solving
            </span>
          </motion.div>
        </div>

        {/* Visual Column */}
        <motion.div 
          variants={imageVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-3xl p-4 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-[-20px] right-[-30px] w-40 h-40 rounded-full bg-gold-500/10 filter blur-2xl animate-pulse" />
            <div className="absolute bottom-[-30px] left-[-30px] w-48 h-48 rounded-full bg-amber-600/5 filter blur-2xl animate-pulse" style={{ animationDelay: '-2s' }} />

            {/* Profile Image Frame */}
            {profile.profilePic ? (
              <img
                src={profile.profilePic}
                alt={profile.name || 'Profile portrait'}
                className="w-full h-full object-cover rounded-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800/60 relative z-10 flex flex-col items-center justify-center text-center p-6 select-none group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 flex items-center justify-center text-neutral-950 text-2xl font-black mb-4 group-hover:scale-110 transition-transform">
                  {profile.name ? profile.name.charAt(0).toUpperCase() : 'S'}
                </div>
                <h3 className="text-white dark:text-white light-mode:text-neutral-900 font-bold text-lg font-serif">
                  {profile.name || 'Sharanya'}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-[180px]">
                  Information Science Engineering Student
                </p>
                {/* Visual outline design */}
                <div className="absolute inset-4 border border-dashed border-neutral-800/60 rounded-xl pointer-events-none" />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
