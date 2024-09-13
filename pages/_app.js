import '../styles/main.css';
import '../styles/header.css';
import '../styles/myinfo.css';
import '../styles/about.css';
import '../styles/resume.css';
import '../styles/project.css';
import '../styles/contact.css';
import '../styles/footer.css';
import '../styles/blog.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sujith Gunasekaran</title>
        <meta name="description" content="Personal website" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
