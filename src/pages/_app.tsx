import type { AppProps } from 'next/app'

import '@styles/fonts.css'
import '@styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
