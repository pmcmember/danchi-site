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
      /** 削除するカテゴリの名前を指定する。カンマ区切りで複数指定可能 */
      name: string
    }

    status: 200
    /** 曲カテゴリ情報レスポンス */
    resBody: Types.MusicSongCategoryListResponse
  }
}
