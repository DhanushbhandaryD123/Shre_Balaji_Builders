import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'amenity',
  title: 'Project Amenity',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Amenity Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'iconName',
      title: 'Lucide Icon Identifier',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Custom Icon Graphic (Optional)',
      type: 'image',
    }),
    defineField({
      name: 'featured',
      title: 'Highlight on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
})
