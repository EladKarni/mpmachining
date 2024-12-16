import { FC, ReactNode } from "react";
import Image from "next/image";
import Button from "@/ui/button";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";

const FeaturesSection = () => {
  return (
    <SectionContainer
      sectionName="features"
      sectionClasses="flex flex-col text-left w-full"
    >
      <div className="text-center gap-2 mb-2">
        <SubtitleText>Lorem ipsum dolor sit amet consectetur. In.</SubtitleText>
        <h5 className="text-primary text-sm">
          Learn more about inner source →
        </h5>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-1/3">
          <div className="w-full max-h-32">
            <Image
              src="/img/mothman.png"
              alt="A placeholder image."
              width={360}
              height={480}
              className="relative aspect-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/3">
          <div className="w-full max-h-32">
            <Image
              src="/img/slendy.png"
              alt="A placeholder image."
              width={360}
              height={480}
              className="relative aspect-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/3">
          <div className="w-full max-h-32">
            <Image
              src="/img/nessie.png"
              alt="A placeholder image."
              width={360}
              height={480}
              className="relative aspect-auto object-contain"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
