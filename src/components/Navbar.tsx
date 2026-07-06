import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileDown, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: (isOpen: boolean) => void;
  logoClickCount: number;
  onLogoClick: () => void;
  logoSpinned: boolean;
  name: string;
}

export default function Navbar({
  activeSection,
  isDarkMode,
  onThemeToggle,
  isMobileMenuOpen,
  onMobileMenuToggle,
  logoClickCount,
  onLogoClick,
  logoSpinned,
  name,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onMobileMenuToggle(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="relative z-[2000]">
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 transition-all duration-300 border-b z-[2000] ${
        isScrolled
          ? isDarkMode
            ? 'py-3.5 bg-slate-950/90 border-slate-800/80 shadow-xl backdrop-blur-xl'
            : 'py-3.5 bg-white/90 border-neutral-200/80 shadow-lg backdrop-blur-xl'
          : 'py-5 bg-transparent border-transparent'
      }`}>
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className={`text-white dark:text-white light-mode:text-neutral-900 text-xl font-semibold font-serif tracking-wide cursor-pointer transition-transform select-none ${
            logoSpinned ? 'animate-[spin_1s_ease-in-out]' : ''
          }`}
        >
          {name || 'Sharanya'}
          <span className="text-gold-500 font-bold">.</span>
        </button>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5">
          <ul className="flex items-center gap-1 list-none bg-neutral-900/40 dark:bg-neutral-950/40 border border-neutral-800/40 dark:border-neutral-800/60 rounded-full">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white bg-gold-500/15 border border-gold-500/20 shadow-[0_4px_12px_rgba(197,163,104,0.08)]'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-2">
          {/* Theme switcher */}
          <button
            onClick={onThemeToggle}
            className="p-2 border border-neutral-800/60 rounded-full text-neutral-300 hover:text-gold-500 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all cursor-pointer"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 md:w-4.5 md:h-4.5" /> : <Moon className="w-4 h-4 md:w-4.5 md:h-4.5" />}
          </button>

          {/* CV download */}
          <a
            href="#download-cv"
            onClick={(e) => {
              e.preventDefault();
              alert('📝 Starting resume/CV download...');
            }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 font-bold text-xs md:text-sm rounded-full shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 active:scale-[0.97] transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />
            <span>CV</span>
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => onMobileMenuToggle(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer links */}
      <div
        className={`fixed top-[62px] right-4 w-[240px] max-w-[90vw] bg-neutral-950/95 border border-neutral-800/80 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-out z-[1999] md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-1 list-none text-left">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white bg-gold-500/15 border border-gold-500/20 shadow-[0_4px_12px_rgba(197,163,104,0.08)]'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2 border-t border-neutral-800/50 mt-2">
            <a
              href="#download-cv-mobile"
              onClick={(e) => {
                e.preventDefault();
                alert('📝 Starting resume/CV download...');
              }}
              className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 font-bold text-xs rounded-xl cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
