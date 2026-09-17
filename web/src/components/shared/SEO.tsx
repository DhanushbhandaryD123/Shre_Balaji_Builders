import React, { useEffect } from 'react'
import { PageMeta } from '../../lib/seo'

interface SEOProps {
  meta: PageMeta
}

export const SEO: React.FC<SEOProps> = ({ meta }) => {
  useEffect(() => {
    document.title = meta.title

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]')
    if (!descTag) {
      descTag = document.createElement('meta')
      descTag.setAttribute('name', 'description')
      document.head.appendChild(descTag)
    }
    descTag.setAttribute('content', meta.description)

    // Update keywords
    if (meta.keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]')
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta')
        keywordsTag.setAttribute('name', 'keywords')
        document.head.appendChild(keywordsTag)
      }
      keywordsTag.setAttribute('content', meta.keywords)
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

    if (meta.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) ogImage.setAttribute('content', meta.ogImage)
    }

    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [meta])

  return null
}
