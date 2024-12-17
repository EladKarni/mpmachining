import type { CollectionConfig } from "payload";

export const Features: CollectionConfig = {
  slug: "features",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "features",
      type: "array",
      minRows: 2,
      maxRows: 4,
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
