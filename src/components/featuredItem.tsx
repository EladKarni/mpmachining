import { imageData } from "@/types/payloadTypes";
import Image from "next/image";
import React from "react";

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
    <div className="flex flex-col gap-4 w-full sm:w-1/3">
      <Image
        src={imageData.url as string}
        alt={imageData.alt as string}
        width={360}
        height={480}
        className="relative aspect-auto object-contain"
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
