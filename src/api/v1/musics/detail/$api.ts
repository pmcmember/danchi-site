import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/detail'
  const GET = 'GET'
  const OPTIONS = 'OPTIONS'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * MicroCMSに登録されている曲の取得
         * @returns 成功時のレスポンス
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * MicroCMSに登録されている曲の取得
         * @returns 成功時のレスポンス
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * APIGateway上のCORS用設定
         */
        options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods0['options']['resHeaders'], Methods0['options']['status']>(prefix, prefix0, OPTIONS, option).send(),
        /**
         * APIGateway上のCORS用設定
         */
        $options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods0['options']['resHeaders'], Methods0['options']['status']>(prefix, prefix0, OPTIONS, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
