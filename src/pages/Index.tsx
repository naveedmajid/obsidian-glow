import Hero from "@/components/landing/Hero";
import ServiceGrid from "@/components/landing/ServiceGrid";
import MagicButton from "@/components/landing/MagicButton";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServiceGrid />
      <MagicButton />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
