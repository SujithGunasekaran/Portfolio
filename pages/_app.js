import '../styles/main.css';
import '../styles/header.css';
import '../styles/myinfo.css';
import '../styles/about.css';
import '../styles/resume.css';
import '../styles/project.css';
import '../styles/contact.css';
import '../styles/footer.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <html lang='en' />
        <meta charSet="utf-8" />
        <title>Sujith Gunasekaran</title>
        <meta name="title" content="Sujith Gunasekaran" />
        <meta name="description" content="Personal website" />
        <meta name="keywords" content="Sujith, SujithGunasekaran, SujithGunasekaran vercel, Gunasekaran, personal website" />
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://sujithgunasekaran.vercel.app/" />
        <meta property="og:title" content="Sujith Gunasekaran" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://sujithgunasekaran.vercel.app/" />
        <meta property="twitter:title" content="Sujith Gunasekaran" />
        <meta property="twitter:description" content="Personal Website" />
        <meta property="twitter:image" content="" />

        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="fonts.googleapis.com" />

        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>

        {/* Bootstrap JS */}
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>

      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
