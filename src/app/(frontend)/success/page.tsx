import TitleText from "@/ui/TitleText";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="flex flex-col items-center justify-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100 h-[calc(100vh-260px)]">
      <div className="mx-auto flex flex-col justify-center items-center gap-6">
        <TitleText>Thank you for your submission!</TitleText>
        <Link
          className="btn max-w-fit bg-primary text-primary-content px-8 hover:bg-primary/40 duration-200 hover:text-black font-semibold uppercase border-0"
          href={"/"}
        >
          Back to Home Page
        </Link>
      </div>
    </main>
  );
};

export default SuccessPage;
