import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (
        baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL
    ).replace(/\/$/, '')
    const PATH0 = '/v1/musics/utils/cms-webhook'
    const POST = 'POST'

    return {
        /**
         * MiscroCMSからのwebhookリクエストを受けて、下記処理を行う
         * - SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
         * - Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
         * @param option.body - MicroCMSからのWebhookリクエスト
         * @returns 成功時のレスポンス
         */
        post: (option: {
            body: Methods0['post']['reqBody']
            headers?: Methods0['post']['reqHeaders'] | undefined
            config?: T | undefined
        }) =>
            fetch<
                Methods0['post']['resBody'],
                BasicHeaders,
                Methods0['post']['status']
            >(prefix, PATH0, POST, option).json(),
        /**
         * MiscroCMSからのwebhookリクエストを受けて、下記処理を行う
         * - SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
         * - Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
         * @param option.body - MicroCMSからのWebhookリクエスト
         * @returns 成功時のレスポンス
         */
        $post: (option: {
            body: Methods0['post']['reqBody']
            headers?: Methods0['post']['reqHeaders'] | undefined
            config?: T | undefined
        }) =>
            fetch<
                Methods0['post']['resBody'],
                BasicHeaders,
                Methods0['post']['status']
            >(prefix, PATH0, POST, option)
                .json()
                .then((r) => r.body),
        $path: () => `${prefix}${PATH0}`,
    }
}

export type ApiInstance = ReturnType<typeof api>
export default api
