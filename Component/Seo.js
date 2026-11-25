import Head from 'next/head';
import { useRouter } from 'next/router';
import { Socials } from '../Information/myInfo';

export const SITE_URL = 'https://sujithgunasekaran.vercel.app';
const SITE_NAME = 'Sujith Gunasekaran';
const HOME_TITLE = `${SITE_NAME} · Senior Software Engineer`;
const DEFAULT_DESCRIPTION = 'Senior Software Engineer at Walmart Global Tech, with 7+ years across insurance and B2B SaaS, now building B2C e-commerce for millions.';
const SHARE_IMAGE = { url: `${SITE_URL}/image/og-image.png`, width: 1200, height: 630, alt: `${SITE_NAME}, Senior Software Engineer at Walmart Global Tech` };

const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${SITE_URL}/#person`,
            name: SITE_NAME,
            url: SITE_URL,
            image: SHARE_IMAGE.url,
            jobTitle: 'Senior Software Engineer',
            worksFor: { '@type': 'Organization', name: 'Walmart Global Tech' },
            knowsAbout: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Vue.js', 'Nuxt.js', 'Web performance', 'Micro-frontends'],
            sameAs: Socials.map((social) => social.href)
        },
        { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL, publisher: { '@id': `${SITE_URL}/#person` } }
    ]
};

const toScript = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

/*
 * `home` adds Person and WebSite data. `noindex` keeps a page (the 404) out of search results.
 * `article` turns the page into a blog post: { publishedTime, author, tags, sameAs }
 */
export default function Seo({ title, description = DEFAULT_DESCRIPTION, article, home = false, noindex = false }) {
    const { asPath } = useRouter();
    const url = `${SITE_URL}${asPath.split(/[?#]/)[0]}`;
    const fullTitle = title ? `${title} · ${SITE_NAME}` : HOME_TITLE;

    const articleJsonLd = article && {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: SHARE_IMAGE.url,
        datePublished: article.publishedTime,
        author: { '@type': 'Person', name: article.author, url: SITE_URL },
        keywords: article.tags.join(', '),
        mainEntityOfPage: url,
        url,
        sameAs: article.sameAs ? [article.sameAs] : undefined
    };

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={SHARE_IMAGE.url} />
            <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
            <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
            <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={SHARE_IMAGE.url} />
            <meta name="twitter:image:alt" content={SHARE_IMAGE.alt} />
            {home && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScript(homeJsonLd) }} />}
            {
                article && (
                    <>
                        <meta name="keywords" content={article.tags.join(', ')} />
                        <meta property="article:published_time" content={article.publishedTime} />
                        <meta property="article:author" content={article.author} />
                        {article.tags.map((tag) => <meta property="article:tag" content={tag} key={`tag-${tag}`} />)}
                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toScript(articleJsonLd) }} />
                    </>
                )
            }
        </Head>
    )
}
