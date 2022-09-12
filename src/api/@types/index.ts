/* eslint-disable */
/** microCMS content common date */
export type MicroCMSDate = {
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

/** microCMS image */
export type MicroCMSImage = {
  height?: number | undefined
  url: string
  width?: number | undefined
}

/** ブログデータ取得結果 */
export type BlogResponse = {
  author: string[]
  categories: string[]
  content: string
  description: string
  image?: MicroCMSImage | undefined
  tags?: {
    fieldId: 'tag'
    tag: string
  }[] | undefined
  title: string
} & MicroCMSDate

/**
 * microCMS contentId
 * https://document.microcms.io/manual/content-id-setting
 */
export type MicroCMSContentId = {
  id: string
}

/** ブログ一覧データ取得結果 */
export type BlogListResponse = {
  contents: ({
    author: string[]
    categories: string[]
    content: string
    description: string
    image?: MicroCMSImage | undefined
    tags?: {
      fieldId: 'tag'
      tag: string
    }[] | undefined
    title: string
  } & MicroCMSContentId & MicroCMSDate)[]
  limit: number
  offset: number
  totalCount: number
}

/** 曲データ取得結果 */
export type MusicResponse = {
  rawIframe: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongDescription?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
  scThumbnailSrc?: string | undefined

  /** 曲カテゴリ */
  songGenres: {
    fieldId: 'songGenres'
    value: string[]
  }

  songImages: {
    fieldId: 'songImages'
    value: string[]
  }
} & MicroCMSDate

/** 曲一覧データ取得結果 */
export type MusicListResponse = {
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

    /** 曲カテゴリ */
    songGenres: {
      fieldId: 'songGenres'
      value: string[]
    }

    songImages: {
      fieldId: 'songImages'
      value: string[]
    }
  } & MicroCMSContentId & MicroCMSDate)[]
  limit: number
  offset: number
  totalCount: number
}

/** 曲カテゴリのスキーマ */
export type MusicSongCategoryResponse = {
  /**
   * ソートキー
   * ジャンル名
   * MicroCMSに登録してあるカテゴリ名と同一
   */
  name: string
  /**
   * パーティションキー
   * カテゴリーの種類(曲のイメージやジャンルなど)
   * base64 encode文字列
   */
  type: 'songGenres' | 'songImages'
}

/** 曲カテゴリ一覧APIレスポンス */
export type MusicSongCategoryListResponse = {
  /**
   * ソートキー
   * ジャンル名
   * MicroCMSに登録してあるカテゴリ名と同一
   */
  name: string
  /**
   * パーティションキー
   * カテゴリーの種類(曲のイメージやジャンルなど)
   * base64 encode文字列
   */
  type: 'songGenres' | 'songImages'
}[]

/** 汎用的なAPIレスポンス */
export type StandardResponse = {
  message: string
}

/** musics APIのスキーマ */
export type MusicIframeConverterResponse = {
  rawIframe: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongDescription?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
  scThumbnailSrc?: string | undefined

  /** 曲カテゴリ */
  songGenre: {
    fieldId: 'songGenres'
    name: string[]
  }

  songImage: {
    fieldId: 'songImages'
    name: string[]
  }
}

/** youtube search APIの結果 */
export type VideoListResponse = {
  etag: string
  items: {
    etag: string

    id: {
      channelId?: string | undefined
      kind?: string | undefined
      playlistId?: string | undefined
      videoId?: string | undefined
    }

    kind: string

    snippet: {
      channelId: string
      description: string
      publishedAt: string

      thumbnails: {
        default: {
          height: number
          url: string
          width: number
        }

        high: {
          height: number
          url: string
          width: number
        }

        midium: {
          height: number
          url: string
          width: number
        }
      }

      title: string
    }
  }[]
  kind: string
  nextPageToken?: string | undefined

  pageInfo: {
    resultsPerPage: number
    totalResults: number
  }

  prevPageToken?: string | undefined
}

/** MicroCMSのmusicのコンテンツ変更時のWebhookAPIリクエスト */
export type MusicCmsWebhookRequest = {
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

        /** 曲カテゴリ */
        songGenres: {
          fieldId: 'songGenres'
          value: string[]
        }

        songImages: {
          fieldId: 'songImages'
          value: string[]
        }
      } & MicroCMSContentId & MicroCMSDate & null>

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

        /** 曲カテゴリ */
        songGenres: {
          fieldId: 'songGenres'
          value: string[]
        }

        songImages: {
          fieldId: 'songImages'
          value: string[]
        }
      } & MicroCMSContentId & MicroCMSDate & null>

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

        /** 曲カテゴリ */
        songGenres: {
          fieldId: 'songGenres'
          value: string[]
        }

        songImages: {
          fieldId: 'songImages'
          value: string[]
        }
      } & MicroCMSContentId & MicroCMSDate & null>

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

        /** 曲カテゴリ */
        songGenres: {
          fieldId: 'songGenres'
          value: string[]
        }

        songImages: {
          fieldId: 'songImages'
          value: string[]
        }
      } & MicroCMSContentId & MicroCMSDate & null>

      status: ('DRAFT' | 'PUBLISH')[]
    } & null>
  } & null>

  service: string
  type: string
}

/** musics APIのスキーマ */
export type MusicIframeConverterRequest = {
  rawIframe: string
  scApiUrl?: string | undefined
  scArtistHref?: string | undefined
  scArtistName?: string | undefined
  scSongDescription?: string | undefined
  scSongHref?: string | undefined
  scSongTitle?: string | undefined
  scSrc?: string | undefined
  scThumbnailSrc?: string | undefined

  /** 曲カテゴリ */
  songGenre: {
    fieldId: 'songGenres'
    name: string[]
  }

  songImage: {
    fieldId: 'songImages'
    name: string[]
  }
}

/** 曲カテゴリ追加APIリクエスト */
export type MusicSongCategoryAddRequest = {
  /** MicroCMSに登録されているカテゴリ名 */
  name: string
  /** MicroCMSに登録されているカテゴリ種別(曲イメージ、ジャンルなどの種別名) */
  type: 'songGenres' | 'songImages'
}[]
