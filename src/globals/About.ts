import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: "about",
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
