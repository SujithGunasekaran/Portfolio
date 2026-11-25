import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import hljs from 'highlight.js';

hljs.registerAliases(['jsonc'], { languageName: 'json' });

const POSTS_DIR = path.join(process.cwd(), 'content', 'writing');
const WORDS_PER_MINUTE = 200;

const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// A fenced block may carry a file name after the language: ```jsx LazyImage.jsx
const marked = new Marked({
    renderer: {
        heading(token) {
            const text = this.parser.parseInline(token.tokens);
            return `<h${token.depth} id="${slugify(token.text)}">${text}</h${token.depth}>\n`;
        },
        code({ text, lang }) {
            const [language = '', file = ''] = (lang || '').split(/\s+/);
            const known = hljs.getLanguage(language) ? language : 'plaintext';
            const body = hljs.highlight(text, { language: known }).value;
            return `<figure class="code-fig"><figcaption class="mono"><span>${escapeHtml(file || 'code')}</span><span>${escapeHtml(language || 'text')}</span></figcaption><pre><code class="hljs language-${known}">${body}</code></pre></figure>\n`;
        },
        // An image on its own line becomes a figure instead of sitting inside a paragraph.
        paragraph({ tokens }) {
            const html = this.parser.parseInline(tokens);
            return tokens.length === 1 && tokens[0].type === 'image' ? `${html}\n` : `<p>${html}</p>\n`;
        },
        image({ href, title, text }) {
            const caption = title ? `<figcaption>${escapeHtml(title)}</figcaption>` : '';
            return `<figure class="post-figure"><img src="${escapeHtml(href)}" alt="${escapeHtml(text)}" loading="lazy" decoding="async" />${caption}</figure>`;
        },
        link({ href, title, tokens }) {
            const text = this.parser.parseInline(tokens);
            const external = /^https?:\/\//.test(href);
            const attrs = `${title ? ` title="${escapeHtml(title)}"` : ''}${external ? ' target="_blank" rel="noopener noreferrer"' : ''}`;
            return `<a href="${escapeHtml(href)}"${attrs}>${text}</a>`;
        }
    }
});

const toDateString = (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : String(value));

const readFrontmatter = (slug) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
    const { data, content } = matter(raw);
    return {
        content,
        meta: {
            slug,
            title: data.title,
            description: data.description,
            date: toDateString(data.date),
            author: data.author,
            tags: data.tags || [],
            medium: data.medium || null
        }
    };
};

export const getPostSlugs = () => fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''));

// Newest first.
export const getAllPosts = () => getPostSlugs().map((slug) => readFrontmatter(slug).meta).sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug) => {
    const { meta, content } = readFrontmatter(slug);
    const words = content.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
    return { ...meta, minutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)), html: marked.parse(content) };
};
