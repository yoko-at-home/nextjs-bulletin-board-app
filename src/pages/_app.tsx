import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleFontProvider } from "../components/font/GoogleFontProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleFontProvider>
      <Component {...pageProps} />
    </GoogleFontProvider>
  );
}

export default MyApp
