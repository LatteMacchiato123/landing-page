import { AboutMe } from "@/components/aboutMe";
import { Experience } from "@/components/experiences";
import { HeroSection } from "@/components/hero";
import { Projects } from "@/components/projects";
import { MySkills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { ContactMe } from "@/components/contact";
import {Footer} from "@/components/footer";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experiences">
        <Experience />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}
