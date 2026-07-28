import About from "./components/About";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">

      <Hero />

      <Featured></Featured>

      <LatestProjects />

      <About />

      <Contact />

    </main>
  );
}