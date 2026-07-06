import { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from './data';
import { safeStorage } from './utils/storage';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import GitHubStats from './components/GitHubStats';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Comments from './components/Comments';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [logoSpinned, setLogoSpinned] = useState(false);

  // Load saved configurations from localStorage (Theme only)
  useEffect(() => {
    const savedTheme = safeStorage.getItem('theme_preference');
    if (savedTheme === 'light-mode') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    } else {
      setIsDarkMode(true);
      document.body.classList.remove('light-mode');
    }
  }, []);

  // Sync scroll metrics
  useEffect(() => {
    const handleScroll = () => {
      // Top progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }

      // Back to top indicator visibility
      setShowBackToTop(window.scrollY > 420);

      // Current section in-view indicator
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggler
  const handleThemeToggle = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);

    if (nextTheme) {
      document.body.classList.remove('light-mode');
      safeStorage.setItem('theme_preference', 'dark-mode');
    } else {
      document.body.classList.add('light-mode');
      safeStorage.setItem('theme_preference', 'light-mode');
    }
  };

  // Logo Click animation triggers
  const handleLogoClick = () => {
    const nextCount = logoClickCount + 1;
    setLogoClickCount(nextCount);

    if (nextCount === 3) {
      setLogoSpinned(true);
      setLogoClickCount(0);
      setTimeout(() => {
        setLogoSpinned(false);
      }, 1000);
    }
  };

  // Easter Egg sequence tracking (Konami Code)
  useEffect(() => {
    const konamiCode = [
      'arrowup',
      'arrowup',
      'arrowdown',
      'arrowdown',
      'arrowleft',
      'arrowright',
      'arrowleft',
      'arrowright',
      'b',
      'a',
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Trigger Easter Egg effect
          alert('🎉 Awesome! You unlocked the portfolio secret Konami code! Spinning colors activated! 🚀');
          document.body.style.filter = 'hue-rotate(180deg)';
          setTimeout(() => {
            document.body.style.filter = 'none';
          }, 6000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 dark:text-neutral-100 font-sans transition-colors duration-300">
      {/* Scroll indicator bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 z-[3000] transition-all duration-100"
        style={{ width: `${scrollPercent}%` }}
      />

      {/* Ambient moving blur background */}
      <AmbientBackground />

      {/* Header & Navbar */}
      <Navbar
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={setIsMobileMenuOpen}
        logoClickCount={logoClickCount}
        onLogoClick={handleLogoClick}
        logoSpinned={logoSpinned}
        name={PROFILE_DATA.name}
      />

      {/* Main Sections */}
      <main className="px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        <Hero
          profile={PROFILE_DATA}
          onNavigateToProjects={handleNavigateToProjects}
          onNavigateToContact={handleNavigateToContact}
        />
        <About profile={PROFILE_DATA} />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <GitHubStats />
        <Certifications />
        <Contact profile={PROFILE_DATA} />
        <Newsletter />
        <Comments />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-950 bg-slate-950/60 backdrop-blur-md relative z-10 text-center text-slate-500 text-xs font-light">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {PROFILE_DATA.name || 'Sharanya'}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center font-mono">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            <span>Built with React, Vite & Tailwind</span>
          </p>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      <button
        onClick={handleBackToTop}
        className={`fixed bottom-6 right-6 p-3 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 rounded-full shadow-lg hover:shadow-gold-500/25 cursor-pointer hover:-translate-y-1 z-50 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
