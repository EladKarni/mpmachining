import { FC, ReactNode } from "react";
import Image from "next/image";
import Button from "@/ui/button";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";

const HeroSection = () => {
  return (
    <SectionContainer
      sectionName="hero"
      sectionClasses="flex flex-col sm:flex-row items-center text-left gap-4"
    >
      <div className="flex flex-col gap-4">
        <TitleText>Lorem ipsum dolor sit amet consectetur. Ut.</TitleText>
        <p className="text-sm text-primary-content/70">
          Lorem ipsum dolor sit amet consectetur. Tincidunt netus nullam sed
          curabitur scelerisque aliquet. Feugiat pulvinar morbi sed amet.
          Sagittis eu orci fringilla sit eget rutrum.
        </p>
        <div className="space-x-4">
          <button className="btn btn-primary hover:btn-primary-700">
            Contact Us
          </button>
          <button className="btn btn-secondary hover:btn-primary-700">
            Learn More
          </button>
        </div>
      </div>
      <div className="py-4 aspect-square">
        <Image
          src="/img/dummypic.jpg"
          alt="A placeholder image."
          width={500}
          height={500}
          className="relative aspect-auto"
        />
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
