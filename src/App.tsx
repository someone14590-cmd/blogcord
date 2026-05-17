import ReadingProgress from './components/ReadingProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogIntro from './components/BlogIntro';
import TableOfContents from './components/TableOfContents';
import HustleCard from './components/HustleCard';
import AdBanner from './components/AdBanner';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { sideHustles } from './data/blogData';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ReadingProgress />
      <Navbar />
      <Hero />
      <BlogIntro />
      <TableOfContents />

      {sideHustles.map((hustle, index) => (
        <div key={hustle.id}>
          <HustleCard
            hustle={hustle}
            isReversed={index % 2 !== 0}
          />
          <AdBanner />
        </div>
      ))}

      <CallToAction />
      <Footer />
    </div>
  );
}
