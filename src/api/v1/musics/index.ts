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
      /**
       * 取得したい件数の上限を指定する。レスポンスサイズが5MBを超えるとエラーが発生する。<br>
       * https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
       */
      limit?: number | undefined
      /**
       * 何件目から取得するかを指定<br>
       * https://document.microcms.io/content-api/get-list-contents#h41838110ca
       */
      offset?: number | undefined
      /**
       * 取得したいデータの並び替えを行う。<br>
       * https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       */
      orders?: string | undefined
      /**
       * コンテンツの絞り込み条件を指定<br>
       * https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
       */
      filters?: string | undefined
      /**
       * コンテンツのIDをカンマ区切りで指定(任意)<br>
       * https://document.microcms.io/content-api/get-list-contents#h6b992e0fe4
       */
      ids?: string | undefined
      /**
       * コンテンツの中で取得する要素を指定<br>
       * https://document.microcms.io/content-api/get-list-contents#h7462d83de4
       */
      fields?: string | undefined
    } | undefined

    status: 200
    /** 曲情報一覧レスポンス */
    resBody: Types.MusicListResponse
  }
}
