import { Metadata } from "next";

export function metadataConstructor({
  title = "Micro Precision Machining ",
  description = "Text needed for description of website. This is what is going to show up when you share the website on social media or it is a result on search engines like Google.",
  image = "url-preview-image.jpg",
  icons = "/favicon.ico",
  noIndex = false,
  customMetadata = {},
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  customMetadata?: Partial<Metadata>;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL("https://micro-precision-machining.netlify.app/"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...customMetadata, // Merge custom metadata with default metadata
  };
}
