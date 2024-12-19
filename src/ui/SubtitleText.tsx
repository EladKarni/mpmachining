import { cn } from "@/util/utils";

type SubtitleTextPropsProps = {
  children: React.ReactNode;
  DarkMode?: boolean;
  sectionClasses?: string;
};

const SubtitleText = ({
  children,
  DarkMode,
  sectionClasses,
}: SubtitleTextPropsProps) => {
  return (
    <h2
      className={cn(
        "text-md sm:text-2xl text-primary-content/100",
        sectionClasses
      )}
    >
      {children}
    </h2>
  );
};

export default SubtitleText;
