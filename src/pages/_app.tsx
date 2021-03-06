import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import GlobalLayout from "@/components/ui/GlobalLayout"
import { useRouter } from 'next/router'
import { PageNames } from "@/const/pages";

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/lib/material-ui/theme';
import createEmotionCache from '@/lib/material-ui/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
type MyAppProps = {
    emotionCache?: EmotionCache;
} & AppProps;

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: MyAppProps) {
  const router = useRouter();
  const pageName = router.pathname.split("/")[1]

  return (
    <CacheProvider value={emotionCache}>
      <Head>
          <meta charSet='utf-8' key="charSet"/>
          <link rel="icon" href="/favicon.ico" key="icon"/>
      </Head>

      <GlobalLayout currentPage={(pageName === ""? "top": pageName) as PageNames}>
        <Component {...pageProps} />
      </GlobalLayout>
    </CacheProvider>
  )
}

export default MyApp
