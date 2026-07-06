import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface TimelineItem {
  id: string;
  type: 'education' | 'internship' | 'certification';
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export default function Experience() {
  const timelineData: TimelineItem[] = [
    {
      id: 'exp-1',
      type: 'education',
      title: 'B.E. Information Science Engineering',
      date: '2022 - Present',
      description: 'Current student focusing on frontend development, UI/UX design, algorithm structures, and modern web frameworks. Active in academic technical circles and student hackathons.',
      tags: ['DSA', 'Web Dev', 'UI/UX'],
    },
    {
      id: 'exp-2',
      type: 'internship',
      title: 'Frontend Development Intern',
      date: 'Jun 2024 - Aug 2024',
      description: 'Developed and optimized responsive web portals, collaborated with creative design teams on UI usability improvements, and integrated REST APIs inside clean React structures.',
      tags: ['React', 'CSS', 'API Integration'],
    },
    {
      id: 'exp-3',
      type: 'certification',
      title: 'UI/UX Design Certification',
      date: 'Completed 2024',
      description: 'Comprehensive industry course focusing on design principles, user research methodologies, interactive wireframing, high-fidelity prototypes, and building custom design systems using Figma.',
      tags: ['Figma', 'Design Systems', 'User Research'],
    },
  ];

  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-gold-500" />;
      case 'internship':
        return <Briefcase className="w-5 h-5 text-gold-500" />;
      case 'certification':
        return <Award className="w-5 h-5 text-gold-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-4xl mx-auto space-y-12 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Academic Journey & Experiences
          </h2>
        </div>

        {/* Timeline Line */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15 } 
            }
          }}
          className="relative border-l-2 border-neutral-800 dark:border-neutral-800/60 md:ml-6 space-y-8 pl-6 md:pl-8 py-2"
        >
          {timelineData.map((item, index) => (
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              key={item.id} 
              className="relative group"
            >
              {/* Timeline dot marker with icon */}
              <div className="absolute -left-[39px] md:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 dark:border-neutral-800/60 flex items-center justify-center shadow-lg group-hover:border-gold-500 transition-colors z-10">
                {getIcon(item.type)}
              </div>

              {/* Timeline content card */}
              <div className="p-6 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold font-serif text-white dark:text-white light-mode:text-neutral-900">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-950 border border-neutral-800/60 rounded-full text-neutral-400 text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 text-sm font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] rounded-full bg-neutral-950 border border-neutral-800/60 text-neutral-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
