import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'unit',
  title: 'Apartment Unit',
  type: 'document',
  fields: [
    defineField({
      name: 'flatNumber',
      title: 'Flat Number (e.g. Flat 001, Flat 002)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bhkType',
      title: 'BHK Type',
      type: 'string',
      options: {
        list: [
          { title: '2 BHK', value: '2BHK' },
          { title: '3 BHK', value: '3BHK' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sba',
      title: 'Super Built-Up Area (SBA in sq.ft)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'floor',
      title: 'Floor Specification',
      type: 'string',
      options: {
        list: [
          { title: 'First Floor', value: 'First' },
          { title: 'Typical Floor (2nd, 3rd, 4th)', value: 'Typical' },
          { title: 'All Floors', value: 'All' },
        ],
      },
      initialValue: 'Typical',
    }),
    defineField({
      name: 'price',
      title: 'Price / Guidance (Optional or leave as "Enquire")',
      type: 'string',
      initialValue: 'Enquire for Price',
    }),
    defineField({
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Fast Selling', value: 'fast_selling' },
          { title: 'Sold Out', value: 'sold' },
        ],
      },
      initialValue: 'available',
    }),
  ],
  preview: {
    select: {
      title: 'flatNumber',
      bhk: 'bhkType',
      sba: 'sba',
      floor: 'floor',
    },
    prepare({ title, bhk, sba, floor }) {
      return {
        title: `${title} (${bhk})`,
        subtitle: `${sba} sq.ft — ${floor} Floor`,
      }
    },
  },
})
