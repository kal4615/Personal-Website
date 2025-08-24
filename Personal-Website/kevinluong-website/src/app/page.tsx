import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Projects from "./components/Home/Projects";
import Contact from "./components/Home/Contact";
import NavBar from "./components/Layout/NavBar";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}