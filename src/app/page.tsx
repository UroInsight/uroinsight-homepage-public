import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Leadership from "@/components/sections/Leadership";
import Solutions from "@/components/sections/Solutions";
import Technology from "@/components/sections/Technology";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Solutions />
      <Technology />
      <Leadership />
      <Contact />
    </main>
  );
}
