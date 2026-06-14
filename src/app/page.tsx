import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AboutPreview />
      <ContactSection />
    </>
  );
}
