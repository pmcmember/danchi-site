// import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import GlobalLayout from "@/components/ui/GlobalLayout"
import { useRouter } from 'next/router'
import { PageNames } from "@/const/pages";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageName = router.pathname.split("/")[1]

  return (
    <GlobalLayout currentPage={(pageName === ""? "top": pageName) as PageNames}>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}

export default MyApp
