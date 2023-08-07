import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://binarymilkshake.com',
      lastModified: new Date(),
    },
    {
      url: 'https://binarymilkshake.com/the-aframe',
      lastModified: new Date(),
    },
  ]
}
