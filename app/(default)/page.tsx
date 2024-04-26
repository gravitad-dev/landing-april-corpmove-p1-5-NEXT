export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import ContactUs from "@/components/contactUs";
import Stats from "@/components/stats";
import TeamMembers from "@/components/team";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero">
        <Hero />
      </section>
      <section id="features" className="features">
        <Features />
      </section>
      <section id="sellers" className="sellers">
        <Services />
      </section>
      <section id="about" className="about">
        <ContactUs />
      </section>
      <section id="buyers" className="buyers">
        <Stats />
      </section>
      <section>
        <TeamMembers />
      </section>
      <section>
        <Projects />
      </section>
      <section id="contact-us" className="contact-us">
        <Newsletter />
      </section>
    </>
  );
}
