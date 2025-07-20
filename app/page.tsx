import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import Techs from '@/components/techs/Techs';
import Projects from '@/components/projects/Projects2';
import Approach from '@/components/Approach/Approach';
import Contact2 from '@/components/contact/Contact2';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <Techs />
      <Projects /> 
      <Contact2 />
    </>
  );
}
