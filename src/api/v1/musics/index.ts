/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** MicroCMSに登録されている曲一覧の取得 */
  get: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    query?: {
      /** 取得したい件数の上限を指定する。レスポンスサイズが5MBを超えるとエラーが発生する。 */
      limit?: number | undefined
      /** 何件目から取得するかを指定する。 */
      offset?: number | undefined
      /**
       * 取得したいデータの並び替えを行う。
       * 参考 : https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       */
      orders?: string | undefined
      /** 取得したいコンテンツのIDを指定する。複数指定したい場合はカンマ区切りで指定する。 */
      ids?: string | undefined
      /** コンテンツの中で取得したい要素を指定する。複数指定したい場合はカンマ区切りで指定する。 */
      fields?: string | undefined
      /**
       * 取得したいデータの条件を指定する。
       * 参考 : https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
       */
      filters?: string | undefined
    } | undefined

    status: 200
    /** 曲情報一覧レスポンス */
    resBody: Types.MusicListResponse
  }
}
