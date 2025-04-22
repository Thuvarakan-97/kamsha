import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import LanguagesSection from "@/components/sections/languages-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <LanguagesSection />
      <ContactSection />
    </>
  );
}