/*
 * Writes public/sitemap.xml before every build, so new posts in content/writing are listed
 * without anyone editing a file by hand. Run by the "prebuild" npm script.
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://sujithgunasekaran.vercel.app';
const PAGES = ['/', '/about', '/experience', '/projects', '/writing', '/contact'];
const postsDir = path.join(__dirname, '..', 'content', 'writing');

const today = new Date().toISOString().slice(0, 10);
const toDate = (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : String(value));

const posts = fs.readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({ slug: file.replace(/\.md$/, ''), date: toDate(matter(fs.readFileSync(path.join(postsDir, file), 'utf8')).data.date) }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

const url = (loc, lastmod) => `  <url>\n    <loc>${SITE_URL}${loc === '/' ? '/' : loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...PAGES.map((page) => url(page, today)), ...posts.map((post) => url(`/writing/${post.slug}`, post.date))].join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${PAGES.length + posts.length} URLs`);
