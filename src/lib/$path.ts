export const pagesPath = {
  blogs: {
    _pid: (pid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blogs/[pid]' as const, query: { pid }, hash: url?.hash })
    }),
    contents: {
      _slug: (slug: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/blogs/contents/[slug]' as const, query: { slug }, hash: url?.hash })
      })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/blogs' as const, hash: url?.hash })
  },
  contact: {
    complete: {
      $url: (url?: { hash?: string }) => ({ pathname: '/contact/complete' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  musics: {
    _pid: (pid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/musics/[pid]' as const, query: { pid }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/musics' as const, hash: url?.hash })
  },
  top: {
    $url: (url?: { hash?: string }) => ({ pathname: '/top' as const, hash: url?.hash })
  },
  videos: {
    _pid: (pid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/videos/[pid]' as const, query: { pid }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/videos' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
