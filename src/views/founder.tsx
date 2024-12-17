import Image from "next/image";
import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import { getFounderData } from "@/util/getFounderData";
import { imageData } from "@/types/payloadTypes";

const FounderSection = async () => {
  // @ts-ignore
  const { title, content, ownerImage } = await getFounderData();

  const imageData = ownerImage as imageData;

  return (
    <SectionContainer
      sectionName="founder"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-2/3">
          <div className="sm:text-center">
            <TitleText>{title}</TitleText>
          </div>
          <p className="text-sm text-primary-content/70">{content}</p>
        </div>
        <div className="py-4 aspect-auto w-auto sm:w-1/3">
          <Image
            src={imageData.url}
            alt={imageData.alt}
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
