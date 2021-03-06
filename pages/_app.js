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
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
