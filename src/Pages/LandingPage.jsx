// src/pages/LandingPage.jsx
import LandingHeader from "../Components/Landing/LandingHeader";
import HeroSection from "../Components/Landing/HeroSection";
import StatsSection from "../Components/Landing/StatsSection";
import PersonalizedSection from "../Components/Landing/PersonalizedSection";
import MissionStatement from "../Components/Landing/MissionStatements";
import GlobalSellingSection from "../Components/Landing/GlobalSellingSection";
import NumbersSection from "../Components/Landing/NumbersSection";
import TestimonialsSection from "../Components/Landing/TestimonialsSection";
import CTABanner from "../Components/Landing/CTABanner";
import LandingFooter from "../Components/Landing/LandingFooter";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <LandingHeader />
      <HeroSection />
      <StatsSection />
      <PersonalizedSection />
      <MissionStatement />
      <GlobalSellingSection />
      <NumbersSection />
      <TestimonialsSection />
      <CTABanner />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

