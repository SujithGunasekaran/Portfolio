import '../styles/globals.css';
import { Space_Grotesk, IBM_Plex_Mono, Inter } from 'next/font/google';
import Layout from '../Component/Layout';

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono'
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
