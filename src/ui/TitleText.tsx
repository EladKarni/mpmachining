import { cn } from "@/util/utils";

type TitleTextProps = {
  children: React.ReactNode;
  DarkMode?: boolean;
  sectionClasses?: string;
};

const TitleText = ({ children, DarkMode, sectionClasses }: TitleTextProps) => {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-4xl font-extrabold text-primary-content/100",
        sectionClasses
      )}
    >
      {children}
    </h2>
  );
};

export default TitleText;
