import { ReactNode } from 'react';
import { Github, TrendingUp, Flame, Star, GitFork } from 'lucide-react';

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-lg flex items-center gap-4 hover:border-gold-500/30 transition-all duration-300">
      <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800/60 text-gold-500 flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <div className="text-left">
        <span className="block text-2xl md:text-3xl font-extrabold font-serif text-gold-500 leading-none">
          {value}
        </span>
        <span className="text-xs text-slate-500 font-medium mt-1.5 block">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function GitHubStats() {
  return (
    <section id="github-stats" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-5xl mx-auto space-y-10 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              GitHub Activity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Open Source Contributions & Stats
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-gold-500" />}
            value="1,247"
            label="Total Contributions"
          />
          <StatCard
            icon={<Flame className="w-6 h-6 text-gold-500 animate-[bounce_1.5s_infinite]" />}
            value="42 days"
            label="Contribution Streak"
          />
          <StatCard
            icon={<Star className="w-6 h-6 text-gold-500" />}
            value="156"
            label="Stars on Repos"
          />
          <StatCard
            icon={<GitFork className="w-6 h-6 text-gold-500" />}
            value="23"
            label="Forks on Repos"
          />
        </div>

        {/* Profile Link */}
        <div className="text-center pt-2">
          <a
            href="#github-profile"
            onClick={(e) => {
              e.preventDefault();
              alert('🚀 Redirecting to the full GitHub developer profile...');
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-950 border border-neutral-800/60 hover:border-gold-500/40 hover:bg-gold-500/5 rounded-full text-slate-300 hover:text-white text-xs font-semibold shadow-md cursor-pointer group"
          >
            <Github className="w-4 h-4 text-gold-500" />
            <span>View Full GitHub Profile</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
