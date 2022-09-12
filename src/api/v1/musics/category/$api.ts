import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/category'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    /**
     * 曲カテゴリ一覧の取得を行う。
     * @returns 曲カテゴリ一覧情報レスポンス
     */
    get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 曲カテゴリ一覧の取得を行う。
     * @returns 曲カテゴリ一覧情報レスポンス
     */
    $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 曲カテゴリの追加を行う。
     * @param option.body - 曲カテゴリ追加リクエスト
     * @returns 曲カテゴリ情報レスポンス
     */
    post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 曲カテゴリの追加を行う。
     * @param option.body - 曲カテゴリ追加リクエスト
     * @returns 曲カテゴリ情報レスポンス
     */
    $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * 曲カテゴリの削除を行う。
     * @returns 曲カテゴリ情報レスポンス
     */
    delete: (option: { query: Methods0['delete']['query'], headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
    /**
     * 曲カテゴリの削除を行う。
     * @returns 曲カテゴリ情報レスポンス
     */
    $delete: (option: { query: Methods0['delete']['query'], headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
    $path: (option?: { method: 'delete'; query: Methods0['delete']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
