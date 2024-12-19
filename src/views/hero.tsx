import Image from "next/image";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import { getHeroData } from "@/util/getHeroData";
import { Media } from "@/payload-types";
import { imageData } from "@/types/payloadTypes";
import Link from "next/link";

const HeroSection = async () => {
  const { title, content, leftButtonText, rightButtonText, heroImage } =
    await getHeroData();

  const image = heroImage as imageData;
  return (
    <SectionContainer
      sectionName="hero"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
        <div className="flex flex-col gap-4">
          <TitleText>{title}</TitleText>
          <p className="text-sm text-primary-content/70">{content}</p>
          <div className="space-x-4">
            <Link
              className="btn btn-primary hover:btn-primary-700"
              href={"#contact"}
            >
              {leftButtonText}
            </Link>
            <Link
              className="btn btn-secondary hover:btn-primary-700"
              href={"#about"}
            >
              {rightButtonText}
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={image.url}
            alt={image.alt}
            width={500}
            height={500}
            className="relative aspect-auto object-contain w-full h-auto"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
