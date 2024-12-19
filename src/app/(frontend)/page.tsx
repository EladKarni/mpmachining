import HeroSection from "@/views/hero";
import AboutSection from "@/views/about";
import FounderSection from "@/views/founder";
import FeaturesSection from "@/views/features";
import ContactSection from "@/views/contact";

export default async function Home() {
  return (
    <main className="flex flex-col gap-y-16 justify-center max-w-3xl m-4 md:mx-auto">
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <FeaturesSection />
      <ContactSection />
    </main>
  );
}
