/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 任意の文字列でMicroCMSに登録されている曲を検索する。
   * タイトル・曲説明・所属しているカテゴリに対して検索をかけ、検索対象文字列が含んでいれば結果として出力する。
   * 何も引っ掛からなかった場合は404でレスポンスを返す。
   */
  get: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    query: {
      /** 取得したい件数の上限を指定する。レスポンスサイズが5MBを超えるとエラーが発生する。 */
      limit?: number | undefined
      /** 何件目から取得するかを指定する。 */
      offset?: number | undefined
      /**
       * 取得したいデータの並び替えを行う。
       * 参考 : https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       */
      orders?: string | undefined
      /** 検索対象の文字列 */
      value: string
    }

    status: 200
    /** 検索結果の曲情報一覧レスポンス */
    resBody: Types.MusicListResponse
  }
}
