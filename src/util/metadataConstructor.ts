import { Metadata } from "next";

export function metadataConstructor({
  title = "Micro Precision Machining ",
  description = "Text needed for description of website. This is what is going to show up when you share the website on social media or it is a result on search engines like Google.",
  image = "url-preview-image.png",
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@crux_psychotherapy",
    },
    icons,
    metadataBase: new URL(
      "https://deploy-preview-11--thecruxpsychotherapy.netlify.app/"
    ),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    ...customMetadata, // Merge custom metadata with default metadata
  };
}
