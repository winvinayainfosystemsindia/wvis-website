// Generates public/sitemap.xml from the app's static route list.
// Runs before `vite build` so the file is copied into dist/ automatically.
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const SITE_URL = process.env.VITE_SITE_URL || 'https://winvinaya.com';

// Keep in sync with src/router/AppRouter.tsx and src/data/shared/navbarData.tsx.
// changefreq/priority are hints for crawlers, not guarantees.
const routes = [
	{ path: '/', changefreq: 'weekly', priority: 1.0 },
	{ path: '/who-we-are', changefreq: 'monthly', priority: 0.8 },
	{ path: '/our-team', changefreq: 'monthly', priority: 0.6 },
	{ path: '/careers', changefreq: 'weekly', priority: 0.7 },
	{ path: '/products/nammacademy', changefreq: 'monthly', priority: 0.8 },
	{ path: '/products/invoice-intelligence', changefreq: 'monthly', priority: 0.8 },
	{ path: '/products/a11ysense-ai', changefreq: 'monthly', priority: 0.8 },
	{ path: '/products/winvinaya-mis', changefreq: 'monthly', priority: 0.8 },
	{ path: '/services/power-platform', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/qa-testing', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/custom-app-dev', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/cloud-infra', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/a11y-audit', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/doc-remediation', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/custom-built-mis', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/digital-marketing', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/operational-excellence', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/inclusive-content', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/corporate-training', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/edu-training', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/ngo-capacity', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/disability-awareness', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/dei-consulting', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/ai-applications', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/agentic-ai', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/data-engineering', changefreq: 'monthly', priority: 0.7 },
	{ path: '/services/doc-intelligence', changefreq: 'monthly', priority: 0.7 },
	{ path: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
	{ path: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
];

const today = new Date().toISOString().split('T')[0];

const urlEntries = routes
	.map(
		({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
	)
	.join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outDir = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(outDir, '..', 'public', 'sitemap.xml');

writeFileSync(outPath, sitemap, 'utf-8');
console.log(`Sitemap written to ${outPath} (${routes.length} URLs)`);
