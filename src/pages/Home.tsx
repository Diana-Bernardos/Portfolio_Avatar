import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import About from './About';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
