import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/useCases";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F4] font-sans pb-20">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
    </div>
  );
}
