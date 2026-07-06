import { useEffect, useRef, useState } from 'react';
import { Laptop, Cpu, Palette, Wrench, Sparkles } from 'lucide-react';

interface SkillItem {
  name: string;
  value: number;
  color: string;
  icon: string;
  desc: string;
  subskills: string[];
}

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animateProgress, setAnimateProgress] = useState(false);

  const skillsData: SkillItem[] = [
    {
      name: 'Programming',
      value: 94,
      color: '#6366f1', // Indigo-500
      icon: '💻',
      desc: 'Proficient in object-oriented and structural programming.',
      subskills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      name: 'Web Dev',
      value: 88,
      color: '#818cf8', // Indigo-400
      icon: '🌐',
      desc: 'Building responsive, highly structured web applications.',
      subskills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      name: 'Concepts',
      value: 90,
      color: '#4f46e5', // Indigo-600
      icon: '🧠',
      desc: 'Strong foundation in design and computer science theories.',
      subskills: ['OOP', 'Data Structures', 'Algorithms'],
    },
    {
      name: 'Soft Skills',
      value: 92,
      color: '#a5b4fc', // Indigo-300
      icon: '🤝',
      desc: 'Collaborative mindset and strong task leadership.',
      subskills: ['Teamwork', 'Git', 'Leadership', 'Communication'],
    },
  ];

  // Trigger skill bar filling after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Custom Radar Chart Canvas drawing inside a React Hook
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI (Retina) screens for crystal clear canvas rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) * 0.36;

    // Draw concentric scale rings
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
    ctx.lineWidth = 1;
    const levels = 5;
    for (let l = 1; l <= levels; l++) {
      const ringRadius = (maxRadius / levels) * l;
      ctx.beginPath();
      ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw values labels on grid
      ctx.fillStyle = 'rgba(99, 102, 241, 0.25)';
      ctx.font = '8px monospace';
      ctx.fillText(`${l * 20}`, centerX + 4, centerY - ringRadius + 3);
    }

    // Draw axes & text labels
    skillsData.forEach((skill, index) => {
      const angle = (index * Math.PI * 2) / skillsData.length - Math.PI / 2;
      const ax = centerX + Math.cos(angle) * maxRadius;
      const ay = centerY + Math.sin(angle) * maxRadius;

      // Axis lines
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(ax, ay);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.stroke();

      // Label positions
      const labelDistance = maxRadius + 18;
      const lx = centerX + Math.cos(angle) * labelDistance;
      const ly = centerY + Math.sin(angle) * labelDistance;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = '11px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(skill.name, lx, ly);
    });

    // Draw solid inner poly (The data visualizer)
    ctx.beginPath();
    skillsData.forEach((skill, index) => {
      const angle = (index * Math.PI * 2) / skillsData.length - Math.PI / 2;
      const valRadius = (maxRadius / 100) * skill.value;
      const px = centerX + Math.cos(angle) * valRadius;
      const py = centerY + Math.sin(angle) * valRadius;

      if (index === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    });
    ctx.closePath();

    // Fill polygon
    ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
    ctx.fill();

    // Outline polygon
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw little points at vertices
    skillsData.forEach((skill, index) => {
      const angle = (index * Math.PI * 2) / skillsData.length - Math.PI / 2;
      const valRadius = (maxRadius / 100) * skill.value;
      const px = centerX + Math.cos(angle) * valRadius;
      const py = centerY + Math.sin(angle) * valRadius;

      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = skill.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = skill.color;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow
    });
  }, [skillsData]);

  const getLucideIcon = (name: string) => {
    switch (name) {
      case 'Programming':
        return <Cpu className="w-5 h-5 text-gold-500" />;
      case 'Web Dev':
        return <Laptop className="w-5 h-5 text-gold-500" />;
      case 'Concepts':
        return <Palette className="w-5 h-5 text-gold-500" />;
      case 'Soft Skills':
        return <Wrench className="w-5 h-5 text-gold-500" />;
      default:
        return <Wrench className="w-5 h-5 text-gold-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-6xl mx-auto space-y-12 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Core Capabilities & Specializations
          </h2>
        </div>

        {/* Dual Column Layout: Canvas + Detail Progress cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          {/* Radar Chart */}
          <div className="flex flex-col items-center bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 rounded-2xl p-6 shadow-xl h-full justify-center">
            <h3 className="text-white dark:text-white light-mode:text-neutral-900 text-md font-bold font-serif tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Skill Distribution
            </h3>
            <div className="relative w-72 h-72">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-3 mt-4 w-full">
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 bg-neutral-950 border border-neutral-800/60 rounded-xl"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="text-xs text-neutral-300 font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    {getLucideIcon(skill.name)}
                    <h3 className="text-base font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 text-xs font-light mb-4 min-h-[32px]">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar and list */}
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-500 font-medium">Proficiency</span>
                      <span className="text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 font-semibold font-mono">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-950 border border-neutral-800/60 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animateProgress ? `${skill.value}%` : '0%',
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {skill.subskills.map((sub) => (
                      <span
                        key={sub}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-950 border border-neutral-800/60 text-neutral-400"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
