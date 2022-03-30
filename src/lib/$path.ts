export const pagesPath = {
  blogs: {
    $url: (url?: { hash?: string }) => ({ pathname: '/blogs' as const, hash: url?.hash })
  },
  contact: {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  musics: {
    $url: (url?: { hash?: string }) => ({ pathname: '/musics' as const, hash: url?.hash })
  },
  top: {
    $url: (url?: { hash?: string }) => ({ pathname: '/top' as const, hash: url?.hash })
  },
  videos: {
    $url: (url?: { hash?: string }) => ({ pathname: '/videos' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
