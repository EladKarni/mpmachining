import Image from "next/image";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";
import { getGlobalData } from "@/util/getAboutData";

const FounderSection = async () => {
  const { title, content, ownerImage } = await getGlobalData("about");

  return (
    <SectionContainer
      sectionName="founder"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-2/3">
          <div className="sm:text-center">
            <SubtitleText>{title}</SubtitleText>
          </div>
          <p className="text-sm text-primary-content/70">{content}</p>
        </div>
        <div className="py-4 aspect-auto w-auto sm:w-1/3">
          <Image
            src={ownerImage.url as string}
            alt={ownerImage.alt as string}
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
