import { blogMeta } from '../data/blogData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function CallToAction() {
  const ref = useScrollReveal();

  return (
    <section id="cta" className="py-20 sm:py-28">
      <div ref={ref} className="fade-up max-w-4xl mx-auto px-6">
        {/* Closing text */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <span className="text-accent font-mono text-sm font-medium">THE BOTTOM LINE</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-2xl sm:text-3xl font-serif font-bold text-dark leading-snug mb-6">
            {blogMeta.closingText}
          </p>
        </div>

        {/* CTA Card */}
        <div className="relative bg-dark rounded-3xl overflow-hidden p-8 sm:p-12 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Hustle?
            </h3>

            <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              Join 50,000+ readers who get our weekly breakdown of the best side hustle 
              strategies, tools, and real success stories delivered to their inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors text-sm"
              />
              <button className="px-6 py-3.5 bg-accent text-white rounded-full font-semibold text-sm hover:bg-accent-light transition-colors whitespace-nowrap">
                Subscribe Free
              </button>
            </div>

            <p className="text-white/30 text-xs mt-4">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-16 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </section>
  );
}
