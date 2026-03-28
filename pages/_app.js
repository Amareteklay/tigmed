import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Ethiopic:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps}/>
    </>
  )
}
