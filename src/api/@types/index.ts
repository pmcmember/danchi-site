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

        medium: {
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

/** 汎用的なAPIレスポンス */
export type ContactResponse = {
  message: string
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

export type ContactRequest = {
  content: string
  name?: string | undefined
  subject: string
  toAddress?: string | undefined
}

/** MicroCMSのデータを一覧取得する際のクエリパラメータ */
export type BlogListSelector = {
  /**
   * コンテンツの中で取得する要素を指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h7462d83de4
   */
  fields?: string | undefined
  /**
   * コンテンツの絞り込み条件を指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
   */
  filters?: string | undefined
  /**
   * コンテンツのIDをカンマ区切りで指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h6b992e0fe4
   */
  ids?: string | undefined
  /**
   * 取得件数を指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
   */
  limit?: number | undefined
  /**
   * 何件目から取得するかを指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h41838110ca
   */
  offset?: number | undefined
  /**
   * 取得するコンテンツの並び替えを行う。(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
   */
  orders?: string | undefined
}

/** MicroCMSのデータを一覧取得する際のクエリパラメータ */
export type MusicListSelector = {
  /**
   * コンテンツの中で取得する要素を指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h7462d83de4
   */
  fields?: string | undefined
  /**
   * コンテンツの絞り込み条件を指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
   */
  filters?: string | undefined
  /**
   * コンテンツのIDをカンマ区切りで指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h6b992e0fe4
   */
  ids?: string | undefined
  /**
   * 取得件数を指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
   */
  limit?: number | undefined
  /**
   * 何件目から取得するかを指定(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#h41838110ca
   */
  offset?: number | undefined
  /**
   * 取得するコンテンツの並び替えを行う。(任意)<br>
   * https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
   */
  orders?: string | undefined
}

/**
 * musics検索の検索条件<br>
 * 
 * - value
 *   検索対象の文字(必須)
 * 
 * - orders
 *   取得するコンテンツの並び替えを行う。(任意)<br>
 *   https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
 * 
 * - offset
 *   何件目から取得するかを指定(任意)<br>
 *   https://document.microcms.io/content-api/get-list-contents#h41838110ca
 * 
 * - limit
 *   取得件数を指定(任意)<br>
 *   https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
 */
export type MusicSearchByAnyValueSelector = {
  value: string
} & {
  limit?: number | undefined
  offset?: number | undefined
  orders?: string | undefined
}

/**
 * カテゴリによる曲検索処理の検索条件<br>
 * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする
 * 
 * - type
 *   検索するカテゴリの種別を指定(必須)<br>
 *   カンマ区切りで複数指定可能
 * 
 * - name
 *   検索するカテゴリを指定する。(必須)<br>
 *   カンマ区切りで複数指定可能
 * 
 * - condition
 *   type、nameが複数指定された場合の検索条件(任意)<br>
 *   デフォルトでorで検索される。<br>
 *   指定できる値
 *   - and
 *   - or
 * 
 * - orders
 *   取得するコンテンツの並び替えを行う。(任意)<br>
 *   https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
 * 
 * - offset
 *   何件目から取得するかを指定(任意)<br>
 *   https://document.microcms.io/content-api/get-list-contents#h41838110ca
 * 
 * - limit
 *   取得件数を指定(任意)<br>
 *   https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
 */
export type MusicSearchByCategorySelector = {
  condition?: 'and' | 'or' | undefined
  name: string
  type: string
} & {
  limit?: number | undefined
  offset?: number | undefined
  orders?: string | undefined
}

/** 曲カテゴリのスキーマ */
export type MusicSongCategorySelector = {
  /**
   * ソートキー
   * ジャンル名
   * MicroCMSに登録してあるカテゴリ名と同一
   */
  name: string
  /**
   * パーティションキー
   * カテゴリーの種類(曲のイメージやジャンルなど)
   */
  type: 'songGenres' | 'songImages'
}

/**
 * 動画一覧を取得する際の検索条件
 * 
 * - maxResults
 *   maxResults パラメータには、結果セットとして返されるアイテムの最大数を指定します。
 *   0 以上 50 以下の値を指定できます。デフォルト値は 5 です。
 * 
 * - pageToken
 *   pageToken パラメータには、返される結果セットに含める特定のページを指定します。
 *   API レスポンスでは、nextPageToken と prevPageToken プロパティは取得可能な他のページを表します。
 * 
 * - order
 *   指定されたパラメータをもとにリストの並び替えを行います。
 *   下記指定できるパラメータ一覧です。
 *   - date
 *     リソースを作成日の新しい順に並べます。
 *   - rating
 *     リソースを評価の高い順に並べます。
 *   - relevance
 *     リソースを検索クエリの関連性が高い順に並べます。このパラメータのデフォルト値です。
 *   - title
 *     リソースをタイトルのアルファベット順に並べます。
 *   - videoCount
 *     アップロード動画の番号順（降順）にチャンネルを並べます。
 *   - viewCount
 *     リソースを再生回数の多い順に並べます。
 */
export type VideoListSelector = {
  maxResults?: number | undefined
  order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount' | undefined
  pageToken?: string | undefined
}
