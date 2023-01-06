/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
    /** MicroCMSに登録されている曲の取得 */
    get: {
        reqHeaders?:
            | {
                  /** 認証鍵 */
                  'X-Custom-Authorization': string
                  /** API鍵 */
                  'X-Api-Key'?: string | undefined
              }
            | undefined

        status: 200
        /** 曲情報レスポンス */
        resBody: Types.MusicResponse
    }
}
