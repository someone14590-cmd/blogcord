import { SideHustle } from '../data/blogData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  DollarSign,
  Gauge,
  Rocket,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

interface Props {
  hustle: SideHustle;
  isReversed: boolean;
}

export default function HustleCard({ hustle, isReversed }: Props) {
  const ref = useScrollReveal(0.05);

  return (
    <section
      id={`hustle-${hustle.id}`}
      className="py-16 sm:py-24"
    >
      <div ref={ref} className="fade-up max-w-6xl mx-auto px-6">
        {/* Rank number + title header */}
        <div className="flex items-start gap-4 sm:gap-6 mb-8 sm:mb-12">
          <span className="font-mono text-6xl sm:text-8xl font-black text-accent/15 leading-none select-none">
            {hustle.rank}
          </span>
          <div className="pt-2 sm:pt-4">
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
              {hustle.title}
            </h2>
            <p className="mt-2 sm:mt-3 text-muted text-base sm:text-lg font-light max-w-2xl">
              {hustle.tagline}
            </p>
          </div>
        </div>

        {/* Image + Stats row */}
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-12`}>
          {/* Image */}
          <div className="lg:w-3/5 img-hover rounded-2xl overflow-hidden shadow-lg">
            <img
              src={hustle.image}
              alt={hustle.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>

          {/* Stats sidebar */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {hustle.tags.map((tag, i) => (
                <span key={tag} className={`tag-pill ${hustle.tagColors[i]}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-xl">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium">Earning Potential</p>
                  <p className="text-lg font-bold text-dark">{hustle.earnings}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-xl">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Gauge className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium">Difficulty</p>
                  <p className="text-lg font-bold text-dark">{hustle.difficulty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-soft-gray rounded-xl">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Rocket className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium">Time to Start</p>
                  <p className="text-lg font-bold text-dark">{hustle.timeToStart}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog content */}
        <div className="max-w-3xl mx-auto">
          {/* Intro paragraph */}
          <p className="text-lg leading-relaxed text-dark/85 mb-10">
            {hustle.intro}
          </p>

          {/* Why It Works */}
          <div className="mb-10">
            <h3 className="flex items-center gap-2 font-serif text-xl sm:text-2xl font-bold text-dark mb-6">
              <Lightbulb className="w-5 h-5 text-accent" />
              Why This Works
            </h3>
            <ul className="space-y-3">
              {hustle.whyItWorks.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-dark/80 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Start */}
          <div className="mb-10">
            <h3 className="flex items-center gap-2 font-serif text-xl sm:text-2xl font-bold text-dark mb-6">
              <ArrowRight className="w-5 h-5 text-accent" />
              How to Start (Step by Step)
            </h3>
            <ol className="space-y-4">
              {hustle.howToStart.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent/10 text-accent font-mono font-bold text-sm rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-dark/80 leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Pro Tip */}
          <div className="bg-gradient-to-r from-accent/5 to-accent-light/5 border border-accent/10 rounded-2xl p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔥</span>
              <h4 className="font-serif font-bold text-dark text-lg">Pro Tip</h4>
            </div>
            <p className="text-dark/80 leading-relaxed">
              {hustle.proTip}
            </p>
          </div>

          {/* Real Talk */}
          <div className="blog-quote py-2 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="font-semibold text-dark text-sm uppercase tracking-wider">Real Talk</span>
            </div>
            <p className="text-muted leading-relaxed italic">
              {hustle.realTalk}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
          <div className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
          <div className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
