import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './category'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/search'
  const PATH1 = '/v1/musics/search/category'
  const GET = 'GET'

  return {
    category: {
      /**
       * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
       * 何も引っ掛からなかった場合は404を返す。
       * @returns 検索結果の曲情報一覧レスポンス
       */
      get: (option: { query: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
       * 何も引っ掛からなかった場合は404を返す。
       * @returns 検索結果の曲情報一覧レスポンス
       */
      $get: (option: { query: Methods1['get']['query'], headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * 任意の文字列でMicroCMSに登録されている曲を検索する。
     * タイトル・曲説明・所属しているカテゴリに対して検索をかけ、検索対象文字列が含んでいれば結果として出力する。
     * 何も引っ掛からなかった場合は404でレスポンスを返す。
     * @returns 検索結果の曲情報一覧レスポンス
     */
    get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 任意の文字列でMicroCMSに登録されている曲を検索する。
     * タイトル・曲説明・所属しているカテゴリに対して検索をかけ、検索対象文字列が含んでいれば結果として出力する。
     * 何も引っ掛からなかった場合は404でレスポンスを返す。
     * @returns 検索結果の曲情報一覧レスポンス
     */
    $get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
