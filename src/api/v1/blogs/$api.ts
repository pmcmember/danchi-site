import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './detail/_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/blogs'
  const PATH1 = '/v1/blogs/detail'
  const GET = 'GET'
  const OPTIONS = 'OPTIONS'

  return {
    detail: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * MicroCMSに登録されているブログ記事の取得
           * @returns 成功時のレスポンス
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * MicroCMSに登録されているブログ記事の取得
           * @returns 成功時のレスポンス
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * APIGateway上のCORS用設定
           */
          options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, prefix1, OPTIONS, option).send(),
          /**
           * APIGateway上のCORS用設定
           */
          $options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, prefix1, OPTIONS, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    /**
     * MicroCMSに登録されているブログ記事一覧の取得
     * @returns 成功時のレスポンス
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * MicroCMSに登録されているブログ記事一覧の取得
     * @returns 成功時のレスポンス
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
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
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
