import { FC, ReactNode } from "react";
import Image from "next/image";

interface FounderProps {
  imageUrl: string;
  imageAlt: string;
  contents: string;
}

export default function MeetOurFounder(props: FounderProps) {
  return (
    <div>
      <div className="flex justify-center items-center absolute inset-0">
        <h2 className="text-8xl text-black">[props.contents]</h2>
        <p>Lorem ipsum etc etc</p>
      </div>
      <Image 
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
