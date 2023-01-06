/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
    /**
     * MiscroCMSからのwebhookリクエストを受けて、下記処理を行う
     * - SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
     * - Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
     */
    post: {
        reqHeaders?:
            | {
                  /** 認証鍵 */
                  'X-Custom-Authorization': string
                  /** API鍵 */
                  'X-Api-Key'?: string | undefined
              }
            | undefined

        status: 200
        /** 成功時のレスポンス */
        resBody: Types.StandardResponse
        /** MicroCMSからのWebhookリクエスト */
        reqBody: Types.MusicCmsWebhookRequest
    }
}
