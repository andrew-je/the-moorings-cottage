import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your site URL
const siteUrl = 'https://themooringscottage.uk';

// Define your pages
const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/cottage', changefreq: 'monthly', priority: 0.9 },
  { url: '/area', changefreq: 'monthly', priority: 0.8 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'yearly', priority: 0.6 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
  { url: '/booking', changefreq: 'monthly', priority: 0.5 },
];

// Create sitemap
const generateSitemap = async () => {
  try {
    const sitemap = new SitemapStream({
      hostname: siteUrl,
      lastmodDateOnly: true,
    });

    const writeStream = createWriteStream(join(__dirname, '../public/sitemap.xml'));
    sitemap.pipe(writeStream);

    // Add all pages to sitemap
    pages.forEach(page => {
      sitemap.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    });

    sitemap.end();
    await streamToPromise(sitemap);
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

generateSitemap();
