// Generates public/sitemap.xml automatically from the app's actual routing config —
// no hand-maintained URL list to keep in sync. Runs before `vite build` so the file
// ends up in dist/ via Vite's public/ copy.
//
// Sources of truth (edit these, not this file, to change what's in the sitemap):
//   - src/router/AppRouter.tsx        -> static page paths (<Route path="..." />)
//   - src/data/shared/servicesData.ts -> valid /services/:serviceId slugs
import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const SITE_URL = process.env.VITE_SITE_URL || 'https://winvinaya.com';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(scriptDir, '..', 'src');

// Routes that exist in the app but shouldn't be indexed (utility/system pages,
// not real content).
const EXCLUDED_PATHS = new Set(['/maintenance']);

// Priority/changefreq assigned by path prefix; first match wins.
const SEO_RULES = [
	{ test: (p) => p === '/', changefreq: 'weekly', priority: 1.0 },
	{ test: (p) => p.startsWith('/products/'), changefreq: 'monthly', priority: 0.8 },
	{ test: (p) => p.startsWith('/services/'), changefreq: 'monthly', priority: 0.7 },
	{ test: (p) => p === '/careers', changefreq: 'weekly', priority: 0.7 },
	{ test: (p) => p === '/who-we-are', changefreq: 'monthly', priority: 0.8 },
	{ test: (p) => p === '/terms-of-service' || p === '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
];
const DEFAULT_RULE = { changefreq: 'monthly', priority: 0.6 };

function seoFor(routePath) {
	return SEO_RULES.find((rule) => rule.test(routePath)) ?? DEFAULT_RULE;
}

// --- 1. Static paths: parse <Route path="..."> straight out of AppRouter.tsx ---
const routerSource = readFileSync(path.join(srcDir, 'router', 'AppRouter.tsx'), 'utf-8');
const routeAttrPattern = /<Route\s[^>]*\bpath=(["'])(.*?)\1/g;

const staticPaths = [];
let match;
while ((match = routeAttrPattern.exec(routerSource)) !== null) {
	const routePath = match[2];
	if (routePath === '*' || routePath.includes(':')) continue; // wildcard / dynamic segments handled separately
	if (EXCLUDED_PATHS.has(routePath)) continue;
	staticPaths.push(routePath);
}

// --- 2. Dynamic /services/:serviceId -> one URL per real service slug ---
// Parsed as text (not imported) so this script doesn't depend on the Node version's
// TypeScript support — top-level SERVICES_DATA keys are single-tab-indented 'slug': {.
const servicesDataPath = path.join(srcDir, 'data', 'shared', 'servicesData.ts');
const servicesDataSource = readFileSync(servicesDataPath, 'utf-8');
const serviceKeyPattern = /^\t'([^']+)':\s*\{/gm;

const servicePaths = [];
let serviceMatch;
while ((serviceMatch = serviceKeyPattern.exec(servicesDataSource)) !== null) {
	servicePaths.push(`/services/${serviceMatch[1]}`);
}

const allPaths = [...new Set([...staticPaths, ...servicePaths])];

const today = new Date().toISOString().split('T')[0];

const urlEntries = allPaths
	.map((routePath) => {
		const { changefreq, priority } = seoFor(routePath);
		return `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
	})
	.join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = path.join(scriptDir, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf-8');
console.log(`Sitemap written to ${outPath} (${allPaths.length} URLs)`);
