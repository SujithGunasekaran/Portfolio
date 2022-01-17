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
        <meta charSet="utf-8" />
        <title>Sujith Gunasekaran</title>
        <meta name="title" content="Sujith Gunasekaran" />
        <meta name="description" content="Personal website" />
        <meta name="keywords" content="Sujith, SujithGunasekaran, SujithGunasekaran vercel, Gunasekaran, personal website" />
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

        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>

        {/* Bootstrap JS */}
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>

        {/* Fontawesome */}
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />

        {/* Flat Icon */}
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css" />

      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
