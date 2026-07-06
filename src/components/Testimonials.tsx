import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData: Testimonial[] = [
    {
      id: 'test-1',
      stars: 5,
      text: "Sharanya's attention to detail and ability to translate complex design system variables into clean, responsive React code is exceptional. A pleasure to collaborate with!",
      author: 'Ravi Sharma',
      role: 'Senior UI/UX Designer',
      avatar: 'RS',
    },
    {
      id: 'test-2',
      stars: 5,
      text: 'The speed at which Sharanya learns new frontend framework practices and implements optimal rendering states is remarkable. Highly recommended!',
      author: 'Anjali Patel',
      role: 'Project Lead',
      avatar: 'AP',
    },
    {
      id: 'test-3',
      stars: 5,
      text: 'Great algorithmic thinker with outstanding interface styling habits. The student portals and charts we collaborated on turned out visually pristine!',
      author: 'Mehul Kumar',
      role: 'Industry Mentor',
      avatar: 'MK',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-4xl mx-auto space-y-10 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Recognition
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            What Colleague Peers & Mentors Say
          </h2>
        </div>

        {/* Carousel Outer Frame */}
        <div className="relative group">
          {/* Main Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[250px] animate-fade-in">
            {/* Background quote design */}
            <Quote className="absolute right-6 top-6 w-24 h-24 text-gold-500/10 pointer-events-none" />

            <div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: activeTestimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Text Quote */}
              <blockquote className="text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 text-base md:text-lg font-light font-serif leading-relaxed italic mb-8 relative z-10">
                "{activeTestimonial.text}"
              </blockquote>
            </div>

            {/* Author details */}
            <div className="flex items-center gap-4 border-t border-neutral-800/60 pt-5 mt-auto">
              {/* Avatar circle */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-600 to-gold-500 text-neutral-950 font-bold font-serif flex items-center justify-center shadow-lg">
                {activeTestimonial.avatar}
              </div>
              <div className="text-left">
                <strong className="block text-white dark:text-white light-mode:text-neutral-900 text-sm font-semibold">
                  {activeTestimonial.author}
                </strong>
                <span className="text-xs text-slate-500 font-medium">
                  {activeTestimonial.role}
                </span>
              </div>
            </div>
          </div>

          {/* Carousel navigation buttons inside/underneath */}
          <div className="flex justify-end items-center gap-2 mt-5">
            <button
              onClick={handlePrev}
              className="p-2.5 border border-neutral-800/60 rounded-full text-neutral-300 hover:text-gold-500 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-500 px-1 select-none">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 border border-neutral-800/60 rounded-full text-neutral-300 hover:text-gold-500 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
