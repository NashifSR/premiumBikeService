import About from "./components/About";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import FeaturedImages from "./components/FeaturedImages";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden">
      <Hero />
      <FeaturedImages />
      <Featured />
      <LatestProjects />
      <About />
      <Contact />
    </main>
  );
}