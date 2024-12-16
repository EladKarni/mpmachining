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
          <Image
            src="/img/mothman.png"
            alt="A placeholder image."
            width={360}
            height={480}
            className="relative aspect-auto object-contain"
          />
          <div>
            <h4 className="text-md font-semibold text-primary-content/100">
              Lorem ipsum dolor sin amet
            </h4>
            <p className="text-sm text-primary-content/70">
              Lorem ipsum dolor sit amet consectetur. Tristique etiam massa
              facilisis viverra est amet adipiscing. Amet a pharetra sit.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/3">
          <Image
            src="/img/mothman.png"
            alt="A placeholder image."
            width={360}
            height={480}
            className="relative aspect-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/3">
          <Image
            src="/img/mothman.png"
            alt="A placeholder image."
            width={360}
            height={480}
            className="relative aspect-auto object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
