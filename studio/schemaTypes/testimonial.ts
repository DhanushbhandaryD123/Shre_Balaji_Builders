import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial (Optional)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resident / Patron Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roleOrLocation',
      title: 'Designation / Location (e.g. Indrali Resident, NRI Investor)',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Photo (Optional)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
