import { ArrowUpRight, BookOpen, Calendar } from 'lucide-react';
import { BlogArticle } from '../types';

export default function Blog() {
  const articles: BlogArticle[] = [
    {
      id: 'blog-1',
      date: 'Jul 6, 2024',
      title: 'Building Accessible Web Interfaces',
      description: 'A deep dive into standard WCAG guidelines, semantic HTML elements structure, focus states management, and building inclusive layouts for all screen readers.',
      tags: ['A11y', 'HTML', 'Best Practices'],
      link: '#',
    },
    {
      id: 'blog-2',
      date: 'Jun 28, 2024',
      title: 'CSS Grid vs Flexbox: When to Use What',
      description: 'A practical, real-world comparison chart analyzing when to deploy structural grid modules versus flexible 1-dimensional flex blocks for design layouts.',
      tags: ['CSS', 'Layout', 'Tutorial'],
      link: '#',
    },
    {
      id: 'blog-3',
      date: 'Jun 15, 2024',
      title: 'React Hooks: Beyond useState',
      description: 'Exploring core hooks like useMemo, useCallback, custom reusable states, and how to structure cleaner, high-performance modular React components.',
      tags: ['React', 'JavaScript', 'Advanced'],
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-6xl mx-auto space-y-10 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Articles
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Latest Thoughts on Web Dev & Design
          </h2>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Date */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-950 border border-neutral-800/60 rounded-full text-slate-400 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-gold-500" />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold font-serif text-white dark:text-white light-mode:text-neutral-900 hover:text-gold-500 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 text-xs sm:text-sm font-light leading-relaxed min-h-[72px]">
                  {article.description}
                </p>
              </div>

              {/* Tag links and Action link */}
              <div className="space-y-4 pt-4 border-t border-neutral-900/60 mt-5">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-950 border border-neutral-800/60 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={article.link}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`📖 Opening blog article "${article.title}" on Dev.to...`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-500 hover:text-gold-400 transition-colors cursor-pointer group"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
