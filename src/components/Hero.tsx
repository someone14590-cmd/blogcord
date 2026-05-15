import { blogMeta } from '../data/blogData';
import { ArrowDown, Clock, Calendar, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={blogMeta.heroImage}
          alt="Side hustle workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            2025 Edition • Updated Weekly
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Top 5 Side Hustles
          <br />
          <span className="text-accent">That Actually Work</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          No fluff. No surveys. No "passive income" fantasies.
          <br className="hidden sm:block" />
          Just real strategies real people use to earn real money.
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm mb-12">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{blogMeta.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{blogMeta.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{blogMeta.readTime}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const el = document.getElementById('intro');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Start Reading</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
