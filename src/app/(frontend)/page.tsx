import HeroSection from "@/views/hero";
import { faqType } from "@/types/faqType";
import FAQSection from "@/views/faq";
import AboutSection from "@/views/about";
import FounderSection from "@/views/founder";
import FeaturesSection from "@/views/features";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data.filter((post: PostType) => post.id < 5));

  const faqItems: faqType[] = posts.map((post: PostType) => ({
    id: post.id.toString(),
    question: post.title,
    answer: post.body,
  }));

  return (
    <main className="flex flex-col gap-y-16 justify-center max-w-4xl m-4 md:mx-auto">
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <FeaturesSection />
    </main>
  );
}
