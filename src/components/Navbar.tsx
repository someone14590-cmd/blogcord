import { useState, useEffect } from 'react';
import { Flame, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('top')}
          className="flex items-center gap-2 group"
        >
          <Flame
            className={`w-5 h-5 transition-colors ${
              scrolled ? 'text-accent' : 'text-white'
            } group-hover:text-accent-light`}
          />
          <span
            className={`font-serif font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-dark' : 'text-white'
            }`}
          >
            The Hustle Files
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['01', '02', '03', '04', '05'].map((num, i) => (
            <button
              key={num}
              onClick={() => scrollTo(`hustle-${i + 1}`)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-muted' : 'text-white/80'
              }`}
            >
              #{num}
            </button>
          ))}
          <button
            onClick={() => scrollTo('cta')}
            className="text-sm font-semibold bg-accent text-white px-4 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? 'text-dark' : 'text-white'
          }`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {[
            { label: 'Freelance Writing', id: 'hustle-1' },
            { label: 'Dropshipping', id: 'hustle-2' },
            { label: 'Content Creation', id: 'hustle-3' },
            { label: 'Online Tutoring', id: 'hustle-4' },
            { label: 'Graphic Design', id: 'hustle-5' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-dark font-medium py-2 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('cta')}
            className="w-full text-center font-semibold bg-accent text-white px-4 py-3 rounded-full hover:bg-accent-light transition-colors mt-2"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
