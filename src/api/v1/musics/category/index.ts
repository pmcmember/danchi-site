/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 曲カテゴリ一覧の取得を行う。 */
  get: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    status: 200
    /** 曲カテゴリ一覧情報レスポンス */
    resBody: Types.MusicSongCategoryListResponse
  }

  /** 曲カテゴリの追加を行う。 */
  post: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    status: 200
    /** 曲カテゴリ情報レスポンス */
    resBody: Types.MusicSongCategoryListResponse
    /** 曲カテゴリ追加リクエスト */
    reqBody: Types.MusicSongCategoryAddRequest
  }

  /** 曲カテゴリの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    query: {
      /**
       * 曲カテゴリ削除APIの削除対象検索条件
       * 
       * - type
       *   カテゴリの種別を指定する
       *   下記から選択
       *   - songGenres
       *   - songImages
       * 
       * - name
       *   カテゴリ名を指定する。<br>
       *   複数指定したい場合はカンマ区切りで指定する。
       */
      MusicSongCategoryDeleteSelector: {
        name: string
        type: 'songGenres' | 'songImages'
      }
    }

    status: 200
    /** 曲カテゴリ情報レスポンス */
    resBody: Types.MusicSongCategoryListResponse
  }
}
