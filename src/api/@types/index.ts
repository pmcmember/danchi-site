/* eslint-disable */
export type MusicsCmsWebhookRequest = {
  api: string

  contents: Partial<{
    new: Partial<{
      draftValue: Partial<{
        rawIframe: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongDescription?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
        scThumbnailSrc?: string | undefined
        songCategories?: {
          fieldId: 'songCategory'
          songCategory: string
        }[] | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      } & null>

      id: string

      publishValue: Partial<{
        rawIframe: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongDescription?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
        scThumbnailSrc?: string | undefined
        songCategories?: {
          fieldId: 'songCategory'
          songCategory: string
        }[] | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      } & null>

      status: ('DRAFT' | 'PUBLISH')[]
    } & null>

    old: Partial<{
      draftValue: Partial<{
        rawIframe: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongDescription?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
        scThumbnailSrc?: string | undefined
        songCategories?: {
          fieldId: 'songCategory'
          songCategory: string
        }[] | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      } & null>

      id: string

      publishValue: Partial<{
        rawIframe: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongDescription?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
        scThumbnailSrc?: string | undefined
        songCategories?: {
          fieldId: 'songCategory'
          songCategory: string
        }[] | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      } & null>

      status: ('DRAFT' | 'PUBLISH')[]
    } & null>
  } & null>

  service: string
  type: string
}

export type MusicsSongCategories = {
  name: string
}[]

export type StandardResponse = {
  message: string
}

/** microCMS list api Response */
export type BlogsResultList = {
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

    tags?: {
      fieldId: 'tag'
      tag: string
    }[] | undefined
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

export type BlogsResult = {
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

  tags?: {
    fieldId: 'tag'
    tag: string
  }[] | undefined
  title: string
} & {
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

/** microCMS list api Response */
export type MusicsResultList = {
  contents: ({
    rawIframe: string
    scApiUrl?: string | undefined
    scArtistHref?: string | undefined
    scArtistName?: string | undefined
    scSongDescription?: string | undefined
    scSongHref?: string | undefined
    scSongTitle?: string | undefined
    scSrc?: string | undefined
    scThumbnailSrc?: string | undefined
    songCategories?: {
      fieldId: 'songCategory'
      songCategory: string
    }[] | undefined
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

export type MusicsResult = {
  rawIframe: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongDescription?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
  scThumbnailSrc?: string | undefined
  songCategories?: {
    fieldId: 'songCategory'
    songCategory: string
  }[] | undefined
} & {
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

/**
 * musics APIのスキーマ
 * 
 * 注：songCategoriesは複数指定の場合改行区切りで指定される。
 */
export type MusicsSchema = {
  rawIframe: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongDescription?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
  scThumbnailSrc?: string | undefined
  songCategories?: {
    fieldId: 'songCategory'
    songCategory: string
  }[] | undefined
}

/**
 * blogs APIのスキーマ
 * 
 * 注：tagsは複数指定の場合改行区切りで指定される。
 */
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

  tags?: {
    fieldId: 'tag'
    tag: string
  }[] | undefined
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
