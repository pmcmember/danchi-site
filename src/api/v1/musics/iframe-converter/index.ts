import { MicroCMSWebhookRequest } from '@/lib/microcms'
import { MethodsDefineUtil, StandardResponse, AuthRequestHeaders } from '@/api/@types'
import { MusicsAPIContent } from '../@types'

export type Methods = MethodsDefineUtil<{
    /**
     * [MicroCMS Webhookリクエスト用]
     *   SoundCloudから入手したiframeを指定し、変換しMicroCMS内の情報を書き換える
     */
    put: {
        reqBody: MicroCMSWebhookRequest<MusicsAPIContent>;
        reqHeaders: AuthRequestHeaders;
        
        resBody: StandardResponse;
    }
}>