import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sevencutsmedia.com',
      lastModified: new Date('2026-08-13'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
