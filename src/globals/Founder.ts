import type { GlobalConfig } from 'payload'

export const Founder: GlobalConfig = {
  slug: "founder",
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
    {
      name: "ownerImage", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
  ],
};
