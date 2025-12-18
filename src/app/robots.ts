import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://aesthetic-clinic.vercel.app/sitemap.xml', // Lembre-se de trocar pelo domínio final quando comprar
  }
}