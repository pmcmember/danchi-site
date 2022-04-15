import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/song-categories'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const OPTIONS = 'OPTIONS'

  return {
    /**
     * 曲カテゴリ一覧の取得を行う。
     * @returns 成功時のレスポンス
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 曲カテゴリ一覧の取得を行う。
     * @returns 成功時のレスポンス
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 曲カテゴリの追加を行う。
     * @returns 成功時のレスポンス
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * 曲カテゴリの追加を行う。
     * @returns 成功時のレスポンス
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * 曲カテゴリの削除を行う。
     * @returns 成功時のレスポンス
     */
    delete: (option: { query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
    /**
     * 曲カテゴリの削除を行う。
     * @returns 成功時のレスポンス
     */
    $delete: (option: { query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
    /**
     * APIGateway上のCORS用設定
     */
    options: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, Methods0['options']['resHeaders'], Methods0['options']['status']>(prefix, PATH0, OPTIONS, option).send(),
    /**
     * APIGateway上のCORS用設定
     */
    $options: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, Methods0['options']['resHeaders'], Methods0['options']['status']>(prefix, PATH0, OPTIONS, option).send().then(r => r.body),
    $path: (option?: { method: 'delete'; query: Methods0['delete']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
