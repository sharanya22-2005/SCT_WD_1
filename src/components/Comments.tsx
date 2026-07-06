import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Calendar, User } from 'lucide-react';
import { Comment } from '../types';
import { safeStorage } from '../utils/storage';

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  // Initial load from localStorage, fallback to default items
  useEffect(() => {
    const savedComments = safeStorage.getItem('guestbook_comments');
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        // Safe fail
      }
    } else {
      const defaultComments: Comment[] = [
        {
          id: 'comm-1',
          name: 'Alex Chen',
          text: 'Great portfolio! Love the interactive elements, custom canvas radar chart, and clean slate theme.',
          date: '2 days ago',
        },
        {
          id: 'comm-2',
          name: 'Jordan Smith',
          text: 'Your skills section with animated progress bars is really cool. Keep building and exploring!',
          date: '5 days ago',
        },
      ];
      setComments(defaultComments);
      safeStorage.setItem('guestbook_comments', JSON.stringify(defaultComments));
    }
  }, []);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus('✕ Please provide a name.');
      return;
    }
    if (!text.trim() || text.trim().length < 5) {
      setStatus('✕ Comment must be at least 5 characters.');
      return;
    }

    const newComment: Comment = {
      id: `comm-${Date.now()}`,
      name: name.trim(),
      text: text.trim(),
      date: 'Just now',
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    safeStorage.setItem('guestbook_comments', JSON.stringify(updated));

    setStatus('✓ Comment posted successfully!');
    setName('');
    setText('');
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section id="comments" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-5xl mx-auto space-y-12 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Guestbook & Peer Feedback
          </h2>
        </div>

        {/* Form and List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Left Column: Comments List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
              Recent Comments ({comments.length})
            </h3>

            {comments.length > 0 ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="p-5 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-md flex gap-4 hover:border-gold-500/30 transition-colors animate-fade-in"
                  >
                    {/* Placeholder Avatar */}
                    <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800/60 flex items-center justify-center text-gold-500 flex-shrink-0 font-bold text-sm">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="space-y-1.5 flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <strong className="text-white dark:text-white light-mode:text-neutral-900 text-sm font-semibold">
                          {comment.name}
                        </strong>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                          <Calendar className="w-3 h-3" />
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 text-xs sm:text-sm font-light leading-relaxed">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 border border-dashed border-neutral-800/60 rounded-2xl bg-neutral-900/10">
                <p className="text-slate-500 text-sm">No comments posted yet. Be the first!</p>
              </div>
            )}
          </div>

          {/* Right Column: Write Feedback Form */}
          <form
            onSubmit={handlePostComment}
            className="p-6 md:p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-xl space-y-4 text-left"
            noValidate
          >
            <div className="flex items-center gap-2 border-b border-neutral-800/60 pb-3 mb-2">
              <MessageSquare className="w-4.5 h-4.5 text-gold-500" />
              <h3 className="text-sm md:text-base font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900">
                Leave a Comment
              </h3>
            </div>

            {/* Name input */}
            <div className="flex flex-col">
              <label htmlFor="comment-name" className="text-xs font-semibold text-slate-400 mb-1.5">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                  type="text"
                  id="comment-name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status) setStatus('');
                  }}
                  placeholder="E.g., Jordan Reed"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-neutral-800/60 rounded-xl text-white dark:text-white light-mode:text-neutral-900 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Text input */}
            <div className="flex flex-col">
              <label htmlFor="comment-text" className="text-xs font-semibold text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                id="comment-text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (status) setStatus('');
                }}
                placeholder="Write your feedback..."
                rows={3}
                required
                className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800/60 rounded-xl text-white dark:text-white light-mode:text-neutral-900 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-slate-600 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 bg-neutral-950 border border-neutral-800/60 hover:border-gold-500/40 hover:bg-gold-500/5 text-neutral-300 hover:text-white font-bold text-sm rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 text-gold-500" />
              <span>Post Comment</span>
            </button>

            {/* Status MSG */}
            {status && (
              <p
                className={`text-center text-xs font-semibold pt-1 ${
                  status.startsWith('✓') ? 'text-gold-500' : 'text-rose-400'
                }`}
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
