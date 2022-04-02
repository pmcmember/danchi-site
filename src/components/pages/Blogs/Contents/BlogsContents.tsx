import type { NextPage } from 'next'
import { useRouter } from 'next/router'

export const BlogsContents: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>slug: {slug}</p>
}
