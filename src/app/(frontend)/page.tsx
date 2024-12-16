import HeroSection from "@/views/hero";
import { faqType } from "@/types/faqType";
import FAQSection from "@/views/faq";
import AboutSection from "@/views/about";

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
    <main className="flex flex-col gap-y-10 text-center max-w-[1100px] m-4 xl:mx-auto">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
