import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/blogs'
  const GET = 'GET'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * MicroCMSに登録されているブログ記事の取得
         * @returns ブログ情報レスポンス
         */
        get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * MicroCMSに登録されているブログ記事の取得
         * @returns ブログ情報レスポンス
         */
        $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * MicroCMSに登録されているブログ記事一覧の取得
     * @returns ブログ一覧情報レスポンス
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * MicroCMSに登録されているブログ記事一覧の取得
     * @returns ブログ一覧情報レスポンス
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
