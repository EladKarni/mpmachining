import type { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: "contact",
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
      name: "content",
      type: "text",
      required: true,
    },
  ],
};
