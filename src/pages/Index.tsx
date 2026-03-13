import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatesSection from "@/components/StatesSection";
import Destinations from "@/components/Destinations";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatesSection />
      <Destinations />
      <WhySection />
      <Footer />
    </div>
  );
};

export default Index;
