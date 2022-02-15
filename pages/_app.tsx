import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // <SessionProvider session={pageProps.session}>
  // `session` comes from `getServerSideProps` or `getInitialProps`.
  // Avoids flickering/session loading on first load.
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
