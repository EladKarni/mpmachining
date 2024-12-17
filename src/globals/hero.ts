import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'text',
      required: true,
    },
    {
        name: 'leftButtonText',
        type: 'text',
        required: true,
    },
    {
        name: 'rightButtonText',
        type: 'text',
        required: true,
    },
    {
        name: 'heroImage', // required
        type: 'upload', // required
        relationTo: 'media', // required
        required: true,
    }
  ],
}
