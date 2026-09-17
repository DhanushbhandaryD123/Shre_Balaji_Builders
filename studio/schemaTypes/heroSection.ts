import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'A Landmark For Your Legacy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      initialValue: 'Premium 2 & 3 BHK Residential Apartments at Indrali Railway Station Road, Kunjibettu, Udupi',
    }),
    defineField({
      name: 'quoteLine',
      title: 'Quote / Italic Line',
      type: 'string',
      initialValue: 'Transforming ideas into Landmark with enduring elegance and world-class craft.',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Book Your Home Now',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Background Video (Optional MP4)',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Elevation Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'fallbackToKenBurns',
      title: 'Enable Ken-Burns Zoom on Image',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
