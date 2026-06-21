import AboutMe from "@/components/AboutUs/AboutMe";
import Intro from "@/components/AboutUs/Intro";
import SkillsSection from "@/components/AboutUs/SkillsSection";
import WorkExperience from "@/components/AboutUs/WorkExperience";
import ContactUsPreview from "@/components/ContactUsPreview";
import { Spotlight } from "@/components/ui/Spotlight";

const AboutUsPage = () => {
  return (
    <div className="w-full rounded-md flex-center flex-col max-container relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <Intro />
      <AboutMe />
      <SkillsSection />
      <WorkExperience />
      <ContactUsPreview />
    </div>
  );
};

export default AboutUsPage;
