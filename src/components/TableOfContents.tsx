import { sideHustles } from '../data/blogData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen } from 'lucide-react';

export default function TableOfContents() {
  const ref = useScrollReveal();

  return (
    <section className="py-8 sm:py-12">
      <div ref={ref} className="fade-up max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-xl font-bold text-dark">What's Inside</h3>
          </div>

          <div className="space-y-1">
            {sideHustles.map((hustle) => (
              <button
                key={hustle.id}
                onClick={() => {
                  const el = document.getElementById(`hustle-${hustle.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-soft-gray transition-colors group text-left"
              >
                <span className="font-mono text-sm text-accent font-bold w-6">
                  {hustle.rank}
                </span>
                <span className="flex-1 text-dark font-medium group-hover:text-accent transition-colors">
                  {hustle.title}
                </span>
                <span className="text-xs text-muted font-mono hidden sm:block">
                  {hustle.earnings}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
