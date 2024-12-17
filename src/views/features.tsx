import Image from "next/image";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";
import { getFeaturedData } from "@/util/getFeaturedData";
import Featureditem from "@/components/featuredItem";
import { imageData } from "@/types/payloadTypes";

const FeaturesSection = async () => {
  const { title, features } = await getFeaturedData();

  return (
    <SectionContainer
      sectionName="features"
      sectionClasses="flex flex-col text-left w-full"
    >
      <div className="text-center gap-2 mb-2">
        <SubtitleText>{title}</SubtitleText>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {features.map((feature) => (
          <Featureditem
            key={feature.id}
            imageData={feature.featuredImage as imageData}
            title={feature.title}
            content={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
