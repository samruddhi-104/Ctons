import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroTwo from "@/components/HeroTwo";
import ServicesSection from "@/components/ServicesSection";
import CommitmentSection from "@/components/CommitmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <HeroTwo />
    <ServicesSection />
    <CommitmentSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
