import { StructureBuilder } from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Balaji Bentota Management')
    .items([
      // Site Settings Singleton
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),

      // Home Page Sections
      S.listItem()
        .title('Home Page Hero')
        .child(
          S.document()
            .schemaType('heroSection')
            .documentId('heroSection')
            .title('Hero Section')
        ),

      // About Us Section
      S.listItem()
        .title('About Us Content')
        .child(
          S.document()
            .schemaType('aboutSection')
            .documentId('aboutSection')
            .title('About Us & Consultant Credentials')
        ),

      S.divider(),

      // Project Content Group
      S.listItem()
        .title('Project — Balaji Bentota')
        .child(
          S.list()
            .title('Project Sections')
            .items([
              S.documentTypeListItem('unit').title('Apartment Units (2 & 3 BHK)'),
              S.documentTypeListItem('floorPlan').title('Floor Plans & Blueprints'),
              S.documentTypeListItem('specification').title('Technical Specifications'),
              S.documentTypeListItem('amenity').title('Amenities & Facilities'),
            ])
        ),

      // Gallery
      S.documentTypeListItem('galleryImage').title('Photo Gallery & Renders'),

      // Testimonials
      S.documentTypeListItem('testimonial').title('Testimonials'),

      S.divider(),

      // Enquiries (Read-only list, newest first)
      S.listItem()
        .title('Customer Enquiries')
        .child(
          S.documentList()
            .title('Recent Enquiries & Site Visit Requests')
            .filter('_type == "enquiry"')
            .defaultOrdering([{ field: 'createdAt', direction: 'desc' }])
        ),
    ])
