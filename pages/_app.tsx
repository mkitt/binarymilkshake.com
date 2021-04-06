import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../components/index.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Binary Milkshake</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
