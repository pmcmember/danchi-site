/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ウェブサイトのお問い合わせフォームからお問い合わせを受けた際のメール送信、履歴保存処理 */
  post: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    status: 200
    /** 成功時のレスポンス */
    resBody: Types.StandardResponse
    /** お問い合わせリクエスト */
    reqBody: Types.ContactRequest
  }
}
