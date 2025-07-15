import HeroSection from "../components/Bootcamp/HeroSection";
import FomoSection from "../components/Bootcamp/FomoSection";
import ProgramSection from "../components/Bootcamp/ProgramSection";
import PricingSection from "../components/Bootcamp/PricingSection";
import CampusVisitSection from "../components/Bootcamp/CampusVisitSection";
import FinalCtaSection from "../components/Bootcamp/FinalCtaSection";
import ProjectsCarousel from "../components/Bootcamp/ProjectsSection";
import PartnersSection from "../components/Bootcamp/PartnersSection";
import LoadingScreen from "../components/Homepage/LoadingScreen";

const BootCamp = () => {
  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <main>
        <HeroSection />
        <FomoSection />
        <ProjectsCarousel />
        <ProgramSection />
        <PricingSection />
        <CampusVisitSection />
        <PartnersSection />
        <FinalCtaSection />
      </main>
    </div>
  );
};

export default BootCamp;
