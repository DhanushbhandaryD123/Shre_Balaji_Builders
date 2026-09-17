import { EnquiryPayload } from '../types'

export interface SubmitEnquiryResult {
  success: boolean
  message: string
  whatsappUrl?: string
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitEnquiryResult> {
  const salesPhone = '919740763625'
  const waMessage = encodeURIComponent(
    `*Balaji Bentota Website Enquiry:*\n` +
    `👤 Name: ${payload.name}\n` +
    `📞 Phone: ${payload.phone}\n` +
    `✉️ Email: ${payload.email || 'N/A'}\n` +
    `🏠 Unit Interest: ${payload.unitInterest || '2 / 3 BHK'}\n` +
    `🗓️ Site Visit: ${payload.siteVisitRequested ? 'Yes, please schedule' : 'No'}\n` +
    `💬 Message: ${payload.message || 'Interested in details & pricing'}`
  )
  const defaultWhatsAppUrl = `https://wa.me/${salesPhone}?text=${waMessage}`

  try {
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      const data = await response.json()
      return {
        success: true,
        message: data.message || 'Enquiry submitted successfully!',
        whatsappUrl: data.whatsappUrl || defaultWhatsAppUrl,
      }
    }
    
    // If running in client-only Vite dev server where /api/enquiry isn't served by Vercel
    if (response.status === 404 || !response.ok) {
      return {
        success: true,
        message: 'Your enquiry has been prepared. Click below to confirm via WhatsApp or call our booking desk directly.',
        whatsappUrl: defaultWhatsAppUrl,
      }
    }
    
    const errData = await response.json().catch(() => ({}))
    return {
      success: false,
      message: errData.message || 'Could not send enquiry right now. Please call 9740763625 directly.',
    }
  } catch (error) {
    // Graceful offline/local dev fallback
    return {
      success: true,
      message: 'Thank you! You can connect with our sales team immediately on WhatsApp.',
      whatsappUrl: defaultWhatsAppUrl,
    }
  }
}
