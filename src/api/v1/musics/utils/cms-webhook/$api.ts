import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/utils/cms-webhook'
  const POST = 'POST'
  const OPTIONS = 'OPTIONS'

  return {
    /**
     * MiscroCMSからのwebhookリクエストを受けて、
     * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
     * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
     * @returns 成功時のレスポンス
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * MiscroCMSからのwebhookリクエストを受けて、
     * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
     * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
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
