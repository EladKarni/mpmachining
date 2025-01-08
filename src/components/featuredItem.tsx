import { imageData } from "@/types/payloadTypes";
import Image from "next/image";

interface FeaturedItemProps {
  imageData: imageData;
  title: string;
  content: string;
}

const Featureditem: React.FC<FeaturedItemProps> = ({
  imageData,
  title,
  content,
}) => {
  return (
    <div className="flex flex-col justify-between gap-4 flex-1 min-w-56">
      <Image
        src={imageData.url as string}
        alt={imageData.alt as string}
        width={360}
        height={480}
        className="relative aspect-auto object-contain w-full h-auto"
      />
      <div>
        <h4 className="text-md font-semibold text-primary-content/100">
          {title}
        </h4>
        <p className="text-sm text-primary-content/70">{content}</p>
      </div>
    </div>
  );
};

export default Featureditem;
