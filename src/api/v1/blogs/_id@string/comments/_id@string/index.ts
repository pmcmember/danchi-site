import { MethodsDefineUtil, AuthRequestHeaders } from '@/api/@types'
import { CommentsSchema } from '../@types';

export type Methods = MethodsDefineUtil<{
    /**
     * ブログ記事に紐づいた指定のIDのコメント情報取得
     */
    get: {
        reqHeaders: AuthRequestHeaders;

        resBody: CommentsSchema;
    };

    /**
     * ブログ記事に紐づいた指定のIDのコメント情報差し替え
     */
    put: {
        reqHeaders: AuthRequestHeaders;
        reqBody: CommentsSchema;

        resBody: CommentsSchema;
    }
}>
