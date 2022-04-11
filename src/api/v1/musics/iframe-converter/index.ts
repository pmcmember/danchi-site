/* eslint-disable */
export type Methods = {
  /** SoundCloudから入手した生Iframe(共有タブに記載されているものそのまま)から情報を抜き取り、musics情報を更新する */
  post: {
    status: 200

    /** 成功時のレスポンス */
    resBody: {
      message: string
    }

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }

    reqBody: {
      api: string

      contents: {
        new: {
          draftKey: string

          draftValue: {
            rawIframe: string
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
            rawIframe: string
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
            rawIframe: string
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
            rawIframe: string
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
  }

  /** APIGateway上のCORS用設定 */
  options: {
    status: 200

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }
  }
}
