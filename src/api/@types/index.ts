/* eslint-disable */
export type AuthRequestHeaders = {
  Authorization: string
  'X-Api-Key': string
}

export type IframeConverterRequest = {
  api: string

  contents: {
    new: {
      draftKey: string

      draftValue: {
        iframeRaw: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      }

      id: string

      publishValue: {
        iframeRaw: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      }

      status: ('DRAFT' | 'PUBLISH')[]
    }

    old: {
      draftKey: string

      draftValue: {
        iframeRaw: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      }

      id: string

      publishValue: {
        iframeRaw: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      }

      status: ('DRAFT' | 'PUBLISH')[]
    }
  }

  id: string
  service: string
  type: string
}

export type StandardResponse = {
  message: string
}

/** microCMS list api Response */
export type BlogsListResponse = {
  contents: ({
    author: string[]
    categories: string[]
    content: string
    description: string

    /** microCMS image */
    image?: {
      height?: number | undefined
      url: string
      width?: number | undefined
    } | undefined

    tags?: string[] | undefined
    title: string
  } & {
    id: string
  } & {
    createdAt: string
    publishedAt: string
    revisedAt: string
    updatedAt: string
  })[]
  limit: number
  offset: number
  totalCount: number
}

export type BlogsObjectResponse = {
  author: string[]
  categories: string[]
  content: string
  description: string

  /** microCMS image */
  image?: {
    height?: number | undefined
    url: string
    width?: number | undefined
  } | undefined

  tags?: string[] | undefined
  title: string
} & {
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

/** microCMS list api Response */
export type MusicsListResponse = {
  contents: ({
    iframeRaw: string
    scApiUrl?: string | undefined
    scArtistHref?: string | undefined
    scArtistName?: string | undefined
    scSongHref?: string | undefined
    scSongTitle?: string | undefined
    scSrc?: string | undefined
  } & {
    id: string
  } & {
    createdAt: string
    publishedAt: string
    revisedAt: string
    updatedAt: string
  })[]
  limit: number
  offset: number
  totalCount: number
}

export type MusicsObjectResponse = {
  iframeRaw: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
} & {
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export type MusicsSchema = {
  iframeRaw: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
}

export type BlogsSchema = {
  author: string[]
  categories: string[]
  content: string
  description: string

  /** microCMS image */
  image?: {
    height?: number | undefined
    url: string
    width?: number | undefined
  } | undefined

  tags?: string[] | undefined
  title: string
}

/**
 * microCMS queries
 * https://document.microcms.io/content-api/get-list-contents#h9ce528688c
 * https://document.microcms.io/content-api/get-content#h9ce528688c
 */
export type MicroCMSQueries = {
  depth?: 1 | 2 | 3 | undefined
  draftKey?: string | undefined

  fields?: Partial<string[] & string> | undefined

  filters?: string | undefined

  ids?: Partial<string[] & string> | undefined

  limit?: number | undefined
  offset?: number | undefined
  orders?: string | undefined
  q?: string | undefined
}
