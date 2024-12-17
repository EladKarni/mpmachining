import type { GlobalConfig } from "payload";

export const Featured: GlobalConfig = {
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
      minRows: 3,
      maxRows: 3,
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
