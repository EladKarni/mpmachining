import { FC, ReactNode } from "react";
import Image from "next/image";
import Button from "@/ui/button";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import { getGlobalData } from "@/util/getAboutData";

const HeroSection = async () => {
  const { title, content, leftButtonText, rightButtonText, heroImage } =
    await getGlobalData("hero");
  return (
    <SectionContainer
      sectionName="hero"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex flex-col gap-4">
          <TitleText>{title}</TitleText>
          <p className="text-sm text-primary-content/70">{content}</p>
          <div className="space-x-4">
            <button className="btn btn-primary hover:btn-primary-700">
              {leftButtonText}
            </button>
            <button className="btn btn-secondary hover:btn-primary-700">
              {rightButtonText}
            </button>
          </div>
        </div>
        <div className="w-full aspect-square flex justify-center">
          <Image
            src={heroImage.url as string}
            alt={heroImage.alt as string}
            width={500}
            height={500}
            className="relative aspect-auto object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
