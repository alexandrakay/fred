import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes = ['', '/about', '/coaching', '/womens-clinics', '/students', '/insights', '/book'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(r => ({ url: SITE_URL + r, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 }));
}
