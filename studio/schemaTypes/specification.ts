import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'specification',
  title: 'Project Specification',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Specification Category / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Technical Description & Materials',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Identifier (e.g. shield, home, door, utensils, bath, zap, elevator, wind)',
      type: 'string',
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
