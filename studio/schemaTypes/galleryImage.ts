import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Exterior & Elevation', value: 'exterior' },
          { title: 'Interior Concept', value: 'interior' },
          { title: 'Floor Plans & Blueprints', value: 'floorplan' },
          { title: 'Construction Updates', value: 'construction' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare({ title, category, media }) {
      return {
        title: title || 'Gallery Image',
        subtitle: category ? `Category: ${category}` : '',
        media,
      }
    },
  },
})
