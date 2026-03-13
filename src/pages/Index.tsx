import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedVenues from "@/components/FeaturedVenues";
import VenueCategories from "@/components/VenueCategories";
import Destinations from "@/components/Destinations";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedVenues />
      <VenueCategories />
      <Destinations />
      <WhySection />
      <Footer />
    </div>
  );
};

export default Index;
