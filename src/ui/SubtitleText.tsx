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
        "text-3xl sm:text-xl font-bold text-primary-content/100",
        sectionClasses
      )}
    >
      {children}
    </h2>
  );
};

export default SubtitleText;
