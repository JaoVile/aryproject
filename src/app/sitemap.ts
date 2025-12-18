import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aesthetic-clinic.vercel.app', // Lembre-se de trocar pelo domínio final
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}