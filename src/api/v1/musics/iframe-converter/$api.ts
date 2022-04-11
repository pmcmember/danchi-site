import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/iframe-converter'
  const POST = 'POST'
  const OPTIONS = 'OPTIONS'

  return {
    /**
     * SoundCloudから入手した生Iframe(共有タブに記載されているものそのまま)から情報を抜き取り、musics情報を更新する
     * @returns 成功時のレスポンス
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * SoundCloudから入手した生Iframe(共有タブに記載されているものそのまま)から情報を抜き取り、musics情報を更新する
     * @returns 成功時のレスポンス
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
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
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
