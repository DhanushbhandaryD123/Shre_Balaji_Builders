import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'enquiry',
  title: 'Customer Enquiry',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'unitInterest',
      title: 'Interested Unit Type',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Enquiry Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'siteVisitRequested',
      title: 'Site Visit Requested',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'createdAt',
      title: 'Received At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      phone: 'phone',
      unit: 'unitInterest',
      date: 'createdAt',
    },
    prepare({ name, phone, unit, date }) {
      const dateFormatted = date ? new Date(date).toLocaleDateString() : 'Recent'
      return {
        title: `${name} (${phone})`,
        subtitle: `${unit ? unit + ' · ' : ''}${dateFormatted}`,
      }
    },
  },
})
