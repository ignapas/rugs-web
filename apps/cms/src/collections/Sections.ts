import type { CollectionConfig } from 'payload'

export const Sections: CollectionConfig = {
  slug: 'sections',
  orderable: true,
  fields: [
    {
      name: 'label',
      type: 'text',
      localized: true
    }
  ]
}
