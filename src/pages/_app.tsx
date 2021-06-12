import Head from 'next/head'
import { SnackbarProvider } from 'notistack'

import 'tailwindcss/tailwind.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import '../styles/swiper.scss'

function MyApp({ Component, pageProps }) {
  return(
    <SnackbarProvider maxSnack={3}>
      <Head>
        <title>Sander Paniago | Wellcome</title>
      </Head>
      <Component {...pageProps} />
    </SnackbarProvider>
  ) 
}

export default MyApp
