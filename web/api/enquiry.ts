import { z } from 'zod'
import { createClient } from '@sanity/client'

const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid 10-digit phone number is required'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  unitInterest: z.string().optional(),
  message: z.string().optional(),
  siteVisitRequested: z.boolean().default(false),
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const validatedData = enquirySchema.parse(body)

    const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
    const token = process.env.SANITY_WRITE_TOKEN
    const dataset = process.env.SANITY_DATASET || 'production'

    if (projectId && token) {
      const client = createClient({
        projectId,
        dataset,
        apiVersion: '2024-01-01',
        token,
        useCdn: false,
      })

      await client.create({
        _type: 'enquiry',
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email || '',
        unitInterest: validatedData.unitInterest || 'Unspecified',
        message: validatedData.message || '',
        siteVisitRequested: validatedData.siteVisitRequested,
        createdAt: new Date().toISOString(),
      })
    }

    // Build WhatsApp Notification Link for builder's sales team (9740763625)
    const salesPhone = '919740763625'
    const waText = encodeURIComponent(
      `*New Balaji Bentota Website Enquiry:*\n` +
      `👤 Name: ${validatedData.name}\n` +
      `📞 Phone: ${validatedData.phone}\n` +
      `✉️ Email: ${validatedData.email || 'N/A'}\n` +
      `🏠 Unit Interest: ${validatedData.unitInterest || 'General'}\n` +
      `🗓️ Site Visit: ${validatedData.siteVisitRequested ? 'Yes, Requested' : 'No'}\n` +
      `💬 Message: ${validatedData.message || 'N/A'}`
    )
    const whatsappUrl = `https://wa.me/${salesPhone}?text=${waText}`

    return res.status(200).json({
      success: true,
      message: 'Thank you for your enquiry. The Shri Balaji team will contact you shortly!',
      whatsappUrl,
    })
  } catch (error: any) {
    console.error('Enquiry submission error:', error)
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: error.errors[0]?.message || 'Invalid input data',
      })
    }
    return res.status(500).json({
      success: false,
      message: 'Failed to process enquiry. Please call us directly at 9740763625.',
    })
  }
}
