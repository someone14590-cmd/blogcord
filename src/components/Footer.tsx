import { Flame, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-accent" />
            <span className="font-serif font-bold text-dark">The Hustle Files</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <span className="hover:text-accent transition-colors cursor-pointer">About</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Archive</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Contact</span>
            <span className="hover:text-accent transition-colors cursor-pointer">RSS</span>
          </div>

          {/* Credit */}
          <p className="text-xs text-muted flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent fill-accent" /> in 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
