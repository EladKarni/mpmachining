import { FC, ReactNode } from "react";
import Image from "next/image";
import Button from "@/ui/button";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";

const FounderSection = () => {
  return (
    <SectionContainer
      sectionName="founder"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-2/3">
          <div className="sm:text-center">
            <SubtitleText>Meet Our Founder</SubtitleText>
          </div>
          <p className="text-sm text-primary-content/70">
            Lorem ipsum dolor sit amet consectetur. Tincidunt blandit gravida
            volutpat.Lorem ipsum dolor sit amet consectetur. Tincidunt blandit
            gravida volutpat.Lorem ipsum dolor sit amet consectetur. Tincidunt
            blandit gravida volutpat.Lorem ipsum dolor sit amet consectetur.
            Tincidunt blandit gravida volutpat.
          </p>
        </div>
        <div className="py-4 aspect-auto w-auto sm:w-1/3">
          <Image
            src="/img/headshot.jpg"
            alt="A placeholder image."
            width={360}
            height={360}
            className="relative aspect-auto object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default FounderSection;
