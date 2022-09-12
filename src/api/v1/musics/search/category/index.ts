/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
   * 何も引っ掛からなかった場合は404を返す。
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
      /** 検索対象のカテゴリの種別 */
      type: 'songGenres' | 'songImages'
      /** 検索対象のカテゴリ */
      name: string
    }

    status: 200
    /** 検索結果の曲情報一覧レスポンス */
    resBody: Types.MusicListResponse
  }
}
