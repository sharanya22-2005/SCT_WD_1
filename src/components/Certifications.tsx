import { Award, ShieldAlert, Sparkles, Trophy } from 'lucide-react';
import { DEFAULT_CERTIFICATIONS } from '../data';
import { motion } from 'motion/react';

export default function Certifications() {
  const certifications = DEFAULT_CERTIFICATIONS;

  return (
    <section id="certifications" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-6xl mx-auto space-y-10 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Certifications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Professional Development & Credentials
          </h2>
        </div>

        {/* Certs Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1 } 
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              key={cert.id}
              className="p-6 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between group"
            >
              <div className="space-y-3.5 flex flex-col items-center w-full">
                {/* Visual Icon Box */}
                <div className="w-14 h-14 rounded-full bg-neutral-950 border border-neutral-800/60 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">
                  {cert.icon === '🏆' ? <Trophy className="w-6 h-6 text-gold-500" /> : <Award className="w-6 h-6 text-gold-500" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 font-medium">
                  {cert.date}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900/60 mt-4 w-full">
                <a
                  href={cert.link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`🔑 Verification ID matched. Fetching PDF copy from "${cert.issuer}" database...`);
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-gold-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Verify Credential</span>
                  <span className="text-gold-500/80">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
