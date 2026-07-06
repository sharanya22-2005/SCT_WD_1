import { Award, Briefcase, GraduationCap, Laptop, MapPin } from 'lucide-react';
import { ProfileData } from '../types';
import { motion } from 'motion/react';

interface AboutProps {
  profile: ProfileData;
}

export default function About({ profile }: AboutProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full max-w-6xl mx-auto space-y-12 text-left"
      >
        {/* Heading */}
        <motion.div variants={fadeInUp} className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              About
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Building polished digital experiences with purpose.
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
          {/* Main info */}
          <div className="space-y-6">
            <motion.p variants={fadeInUp} className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 leading-relaxed font-light text-base sm:text-lg">
              I’m an Information Science Engineering student with a growing focus on front-end development, interface design, and user-centered problem solving. I enjoy turning ideas into intuitive, modern experiences that feel both elegant and practical.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 leading-relaxed font-light text-base sm:text-lg">
              Through academics and hands-on projects, I specialize in crafting clean code, responsive structures, and accessible layouts. My goal is to bridge the gap between complex engineering systems and smooth user-facing visuals.
            </motion.p>

            {/* Quick stats cards */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 hover:-translate-y-1 transition-all group">
                <div className="p-2 w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <Laptop className="w-4.5 h-4.5" />
                </div>
                <strong className="block text-2xl font-bold font-serif text-white dark:text-white light-mode:text-neutral-900">
                  10+
                </strong>
                <span className="text-xs text-neutral-500 font-medium">
                  Completed Projects
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 hover:-translate-y-1 transition-all group">
                <div className="p-2 w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <strong className="block text-2xl font-bold font-serif text-white dark:text-white light-mode:text-neutral-900">
                  2+ Years
                </strong>
                <span className="text-xs text-neutral-500 font-medium">
                  Learning Journey
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 hover:-translate-y-1 transition-all group">
                <div className="p-2 w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <strong className="block text-2xl font-bold font-serif text-white dark:text-white light-mode:text-neutral-900">
                  5
                </strong>
                <span className="text-xs text-neutral-500 font-medium">
                  Professional Certs
                </span>
              </div>
            </motion.div>
          </div>

          {/* Side card */}
          <motion.div variants={fadeInUp} className="p-4 rounded-3xl bg-neutral-900/30 dark:bg-neutral-900/10 border border-neutral-800/60 dark:border-neutral-800/50 shadow-xl overflow-hidden flex flex-col items-center text-center">
            <div className="w-full aspect-[4/3] rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden flex items-center justify-center relative group">
              {profile.profilePic ? (
                <img
                  src={profile.profilePic}
                  alt={profile.name || 'Profile illustration'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800/60 text-gold-500 font-bold mb-3">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <h4 className="text-white dark:text-white light-mode:text-neutral-900 font-bold text-sm font-serif">Engineering & Design</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 max-w-[200px]">
                    Information Science Engineering
                  </p>
                </div>
              )}
            </div>

            {/* Profile info beneath image */}
            <div className="w-full pt-4 space-y-2">
              <h3 className="text-white dark:text-white light-mode:text-neutral-900 font-bold text-lg font-serif">
                {profile.name || 'Sharanya'}
              </h3>
              {profile.location && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
