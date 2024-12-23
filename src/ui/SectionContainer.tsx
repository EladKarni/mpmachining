import { cn } from "@/util/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  sectionName: string;
  isFullWidth?: boolean;
  sectionClasses?: string;
  innerContainerClasses?: string;
};

const SectionContainer = ({
  children,
  sectionName,
  sectionClasses,
  innerContainerClasses,
  isFullWidth,
}: SectionContainerProps) => {
  return (
    <section
      id={sectionName}
      className={cn(
        "w-full px-4 lg:max-w-3xl scroll-mt-36",
        {
          "lg:max-w-full mx-auto": isFullWidth,
        },
        sectionClasses
      )}
    >
      <div className={cn(innerContainerClasses)}>{children}</div>
    </section>
  );
};

export default SectionContainer;
