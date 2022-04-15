/* eslint-disable */
export type Methods = {
  /**
   * MiscroCMSからのwebhookリクエストを受けて、
   * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
   * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
   */
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
