import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sevencutsmedia.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.sevencutsmedia.com/articles',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.sevencutsmedia.com/articles/best-tiktok-hooks-2026',
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.sevencutsmedia.com/articles/how-much-does-a-short-form-agency-cost',
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.sevencutsmedia.com/articles/youtube-shorts-algorithm-explained',
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
