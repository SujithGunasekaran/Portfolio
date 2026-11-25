import { Html, Head, Main, NextScript } from 'next/document';

const THEME_SCRIPT = `
try {
    var saved = localStorage.getItem('theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.js = '1';
} catch (e) {}
`;

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="theme-color" content="#F3F0EA" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#0B0E14" media="(prefers-color-scheme: dark)" />
                <link rel="icon" href="/image/icon.svg" type="image/svg+xml" />
                <link rel="icon" href="/assets/favicon_io/favicon_32.png" sizes="32x32" type="image/png" />
                <link rel="icon" href="/assets/favicon_io/favicon_16.png" sizes="16x16" type="image/png" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple_icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
