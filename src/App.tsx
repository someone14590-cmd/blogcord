import ReadingProgress from './components/ReadingProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogIntro from './components/BlogIntro';
import TableOfContents from './components/TableOfContents';
import HustleCard from './components/HustleCard';
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
        <HustleCard
          key={hustle.id}
          hustle={hustle}
          isReversed={index % 2 !== 0}
        />
      ))}

      <CallToAction />
      <Footer />
    </div>
  );
}
