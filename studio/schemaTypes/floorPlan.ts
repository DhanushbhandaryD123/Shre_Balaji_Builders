import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'floorPlan',
  title: 'Floor Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'floorName',
      title: 'Floor Name (e.g. Typical Floor Plan / First Floor Plan)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'floorName', maxLength: 96 },
    }),
    defineField({
      name: 'planImage',
      title: 'Plan Schematic Drawing / Blueprint',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'totalFloorArea',
      title: 'Total Floor Area (sq.ft)',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'relatedUnits',
      title: 'Related Units',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'unit' }] }],
    }),
  ],
})
