import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";
import { getAboutData } from "@/util/getAboutData";

const AboutSection = async () => {
  const { title, content } = await getAboutData();

  return (
    <SectionContainer
      sectionName="about"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col">
        <SubtitleText>{title}</SubtitleText>
        <div className="mt-4 space-y-4 text-sm text-primary-content/70">
          {content}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
