import React, { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('✕ Please enter a valid email.');
      return;
    }

    setStatus('✓ Thank you for subscribing to my newsletter!');
    setEmail('');
    setTimeout(() => {
      setStatus('');
    }, 4000);
  };

  return (
    <section id="newsletter" className="py-12 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-950/40 via-neutral-900/40 to-neutral-950/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-2xl overflow-hidden flex flex-col items-center text-center">
          {/* Subtle design elements */}
          <div className="absolute top-[-20px] right-[-20px] w-36 h-36 rounded-full bg-gold-500/5 filter blur-xl animate-pulse" />
          <div className="absolute bottom-[-30px] left-[-30px] w-40 h-40 rounded-full bg-gold-600/3 filter blur-xl animate-pulse" />

          {/* Icon Header */}
          <div className="p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-2xl mb-4 shadow-inner">
            <Mail className="w-6 h-6 text-gold-500" />
          </div>

          <div className="space-y-2 max-w-lg mb-6">
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Stay Updated
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
              Get Insights on Web Dev & Design
            </h2>
            <p className="text-neutral-400 dark:text-neutral-400 light-mode:text-neutral-600 text-xs sm:text-sm font-light">
              Subscribe to my occasional newsletter where I share web performance tricks, Figma layouts templates, and modern React tutorials.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md" noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status) setStatus('');
              }}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-neutral-950 border border-neutral-800/60 rounded-xl text-white dark:text-white light-mode:text-neutral-900 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 font-bold text-sm rounded-xl hover:opacity-95 shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
            >
              Subscribe
            </button>
          </form>

          {/* Status msg */}
          {status && (
            <p
              className={`text-xs font-semibold mt-4 animate-pulse ${
                status.startsWith('✓') ? 'text-gold-500' : 'text-rose-400'
              }`}
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
