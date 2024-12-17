import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";

const AboutSection = async () => {
  return (
    <SectionContainer
      sectionName="about"
      sectionClasses="flex flex-col text-left"
    >
      <div className="flex flex-col">
        <SubtitleText>
          Lorem ipsum dolor sit amet consectetur. Blandit tristique.
        </SubtitleText>
        <div className="mt-4 space-y-4 text-sm text-primary-content/70">
          <p>
            Lorem ipsum dolor sit amet consectetur. Id dignissim ut in feugiat.
            Ornare congue libero consectetur pellentesque ut. Sapien laoreet
            ornare ante scelerisque. Nulla nisl metus cras a augue ultrices nunc
            augue neque. Pretium ullamcorper velit ultrices turpis eget sed
            egestas. Pellentesque proin convallis consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras volutpat mauris euismod
            varius phasellus pharetra. Eget nibh condimentum volutpat malesuada
            porttitor lectus eu ac sed. Vestibulum velit ornare suscipit cras
            non.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
