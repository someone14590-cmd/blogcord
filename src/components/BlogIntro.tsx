import { blogMeta } from '../data/blogData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BlogIntro() {
  const ref = useScrollReveal();

  return (
    <section id="intro" className="py-20 sm:py-28">
      <div ref={ref} className="fade-up max-w-3xl mx-auto px-6">
        {/* Decorative element */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border" />
          <span className="text-accent font-mono text-sm font-medium">THE INTRO</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-xl sm:text-2xl leading-relaxed text-dark/90 font-light">
          {blogMeta.introText}
        </p>

        <div className="mt-10 p-6 bg-soft-gray rounded-2xl border border-border">
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-semibold text-dark">⚡ Quick note:</span>{' '}
            These aren't ranked by "easiness." They're ranked by accessibility, scalability, 
            and how quickly you can start seeing real income. Every hustle on this list has 
            been tested, validated, and is actively making people money right now.
          </p>
        </div>
      </div>
    </section>
  );
}
