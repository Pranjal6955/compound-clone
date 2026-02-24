import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/useCases";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQS from "@/components/FAQS";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F4] font-sans ">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <Testimonial />
      <CTA />
      <FAQS />
      <Footer />
    </div>
  );
}
