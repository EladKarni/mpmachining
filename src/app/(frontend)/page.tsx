import HeroSection from "@/views/hero";
import AboutSection from "@/views/about";
import FounderSection from "@/views/founder";
import FeaturesSection from "@/views/features";
import ContactSection from "@/views/contact";
import { getContactData } from "@/util/getContactData";

export const dynamic = "force-dynamic";

export default async function Home() {
  const contactData = await getContactData();

  return (
    <main className="flex flex-col gap-y-16 justify-center max-w-3xl m-4 md:mx-auto">
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <FeaturesSection />
      <ContactSection title={contactData.title} content={contactData.content} />
    </main>
  );
}
