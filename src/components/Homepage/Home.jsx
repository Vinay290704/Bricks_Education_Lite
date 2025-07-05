
import "./style.css";

import { HomeProvider } from "../../context/HomeContext";

import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import OutcomesSection from "./OutcomesSection";
import ScheduleSection from "./ScheduleSection";
import ProvidesSection from "./ProvidesSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <HomeProvider>
      <LoadingScreen />
      <Header />
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
