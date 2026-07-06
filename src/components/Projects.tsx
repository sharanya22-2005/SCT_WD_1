import { useState } from 'react';
import { Search, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { ProjectCategory } from '../types';
import { DEFAULT_PROJECTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Perform real-time filter & search queries matching
  const filteredProjects = DEFAULT_PROJECTS.filter((project) => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techs.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'design', label: 'Design' },
  ];

  return (
    <section id="projects" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-6xl mx-auto space-y-10 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Selected Work & Explorations
          </h2>
        </div>

        {/* Search & Filters Controls */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4 items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔍 Search projects by title, description, or stack..."
                className="w-full pl-11 pr-4 py-3 bg-neutral-900/40 dark:bg-neutral-950/20 border border-neutral-800/60 dark:border-neutral-800/50 rounded-2xl text-white dark:text-white light-mode:text-neutral-900 placeholder:text-neutral-500 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    activeFilter === cat.id
                      ? 'bg-gold-500/15 border-gold-500/40 text-gold-500 shadow-md'
                      : 'bg-transparent border-neutral-800/60 text-neutral-400 hover:border-gold-500/30 hover:text-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Counts Line */}
          <div className="flex items-center justify-between text-xs text-neutral-500 border-b border-neutral-900/60 pb-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Filter className="w-3.5 h-3.5" />
              Showing <span className="text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 font-bold">{filteredProjects.length}</span> of{' '}
              <span className="text-neutral-400 font-bold">{DEFAULT_PROJECTS.length}</span> total projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={project.id}
                  className="group flex flex-col justify-between bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 rounded-2xl p-4.5 shadow-xl hover:border-gold-500/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <div>
                    {/* Decorative Thumbnail Header */}
                    <div
                      className={`h-36 rounded-xl bg-gradient-to-br ${project.thumbClass} mb-4 relative overflow-hidden flex items-center justify-center p-4`}
                    >
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-300" />
                      {/* Floating Design Sparkle */}
                      <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-neutral-950/40 border border-neutral-800/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-4 h-4 text-gold-500" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-mono text-white/90 bg-neutral-950/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Body Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-serif text-white dark:text-white light-mode:text-neutral-900 group-hover:text-gold-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 text-xs sm:text-sm font-light leading-relaxed min-h-[64px]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer stack and link */}
                  <div className="space-y-4 pt-4 border-t border-neutral-900/60 mt-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-950 border border-neutral-800/60 text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link action */}
                    <div className="flex items-center justify-between">
                      <a
                        href={project.link}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`📂 Launching interactive demo for "${project.title}"...`);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-500 hover:text-gold-400 transition-colors cursor-pointer group/link"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-neutral-900/10 border border-dashed border-neutral-800/60 rounded-2xl">
            <p className="text-neutral-500 font-light text-sm">
              No projects match your current category filter or search query.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-3.5 text-xs text-gold-500 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
