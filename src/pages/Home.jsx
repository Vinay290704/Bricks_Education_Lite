import { HomeProvider } from "../context/HomeContext";
import LoadingScreen from "../components/Homepage/LoadingScreen";
import HeroSection from "../components/Homepage/HeroSection";
import AboutSection from "../components/Homepage/AboutSection";
import TestimonialsSection from "../components/Homepage/TestimonialsSection";
import OutcomesSection from "../components/Homepage/OutcomesSection";
import ScheduleSection from "../components/Homepage/ScheduleSection";
import ProvidesSection from "../components/Homepage/ProvidesSection";
import Footer from "../components/common/Footer";
import "../styles/style.css"

const Home = () => {
  return (
    <HomeProvider>
      <LoadingScreen />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <OutcomesSection />
        <ScheduleSection />
        <ProvidesSection />
      </main>
      <Footer />
    </HomeProvider>
  );
};

export default Home;
