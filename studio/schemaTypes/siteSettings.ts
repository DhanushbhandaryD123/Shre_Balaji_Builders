import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Shri Balaji Builders & Developers',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Transforming Ideas Into Landmark',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Booking Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['9740763625', '8660576288', '7795716581'],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Primary WhatsApp Number (e.g. 919740763625)',
      type: 'string',
      initialValue: '919740763625',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Enquiry Email Address',
      type: 'string',
      initialValue: 'info@balajibentota.com',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Registered Office Address',
      type: 'text',
      rows: 2,
      initialValue: '"Shri Balaji", Udyavara, Udupi Dist., Karnataka, India',
    }),
    defineField({
      name: 'projectAddress',
      title: 'Project Site Address',
      type: 'text',
      rows: 2,
      initialValue: 'Balaji Bentota, Indrali Railway Station Road, Kunjibettu, Udupi – 576102, Karnataka',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      initialValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.39420067645!2d74.7570!3d13.3440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb9e5d48259f%3A0x6b449b071aa1e8f2!2sIndrali%2C%20Udupi%2C%20Karnataka%20576102!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
      initialValue: 'Balaji Bentota | Luxury 2 & 3 BHK Apartments in Indrali, Kunjibettu, Udupi',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO Meta Description',
      type: 'text',
      rows: 3,
      initialValue: 'Balaji Bentota offers premium 2 & 3 BHK residential apartments on Indrali Railway Station Road, Kunjibettu, Udupi. A-class construction, automatic lift, generator backup & covered parking.',
    }),
  ],
})
