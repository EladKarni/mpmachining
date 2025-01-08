import SectionContainer from "@/ui/SectionContainer";
import { getFeaturedData } from "@/util/getFeaturedData";
import Featureditem from "@/components/featuredItem";
import { imageData } from "@/types/payloadTypes";
import TitleText from "@/ui/TitleText";

const FeaturesSection = async () => {
  const { title, features } = await getFeaturedData();

  return (
    <SectionContainer
      sectionName="features"
      sectionClasses="flex flex-col text-left w-full"
    >
      <div className="text-center pb-12">
        <TitleText>{title}</TitleText>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
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
