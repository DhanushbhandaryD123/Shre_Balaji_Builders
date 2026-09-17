import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'builderStory',
      title: 'Builder Story',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text',
      rows: 3,
      initialValue: 'To sculpt timeless residential addresses across coastal Karnataka that harmonize structural excellence, Vastu harmony, and enduring community pride.',
    }),
    defineField({
      name: 'consultantName',
      title: 'Consultant Name',
      type: 'string',
      initialValue: 'A.G. Associates',
    }),
    defineField({
      name: 'consultantCredentials',
      title: 'Consultant Credentials & Certifications',
      type: 'text',
      rows: 3,
      initialValue: 'Architects, Engineers, Town Planners & Valuers — ISO 9001:2015 Certified Organization. AGA Kantilever, Udupi. Web: agaudupi.com',
    }),
    defineField({
      name: 'trackRecordPoints',
      title: 'Track Record & Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Uncompromising A-Class waterproof structural construction',
        'Strategic location adjacent to Indrali Railway Station & educational hub',
        'Transparent title, comprehensive municipal approvals, and Vastu-compliant layouts',
        'Dedicated customer-first delivery with premium branded fittings throughout',
      ],
    }),
  ],
})
