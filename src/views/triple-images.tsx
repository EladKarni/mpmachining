import { FC, ReactNode } from "react";
import Image from "next/image";

interface TripleImageProps {
  heading: string;
  text: string;

  image1Url: string;
  image1Alt: string;
  image1Header: string;
  image1Text: string;

  image2Url: string;
  image2Alt: string;
  image2Header: string;
  image2Text: string;
  
  image3Url: string;
  image3Alt: string;
  image3Header: string;
  image3Text: string;
}

export default function TripleImages(props: TripleImageProps) {
  return (
    <div>
      <div className="flex justify-center items-center absolute inset-0">
        <h3 className="text-8xl text-black">[props.heading]</h3>
        <p>[props.text]</p>
      </div>
      <div>
        <div>
          <Image 
            src={props.image1Url}
            alt={props.image1Alt}
            fill
            style={{ objectFit: "cover" }}
          />
          <h3>[props.image1Header]</h3>
          <p>[props.image1Text]</p>
        </div>
        <div>
          <Image 
            src={props.image2Url}
            alt={props.image2Alt}
            fill
            style={{ objectFit: "cover" }}
          />
          <h3>[props.image2Header]</h3>
          <p>[props.image2Text]</p>
        </div>
        <div>
          <Image 
            src={props.image3Url}
            alt={props.image3Alt}
            fill
            style={{ objectFit: "cover" }}
          />
          <h3>[props.image3Header]</h3>
          <p>[props.image3Text]</p>
        </div>
      </div>
    </div>
  );
};
