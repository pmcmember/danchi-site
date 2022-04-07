import { MicroCMSQueries } from "microcms-js-sdk"
import { MethodsDefineUtil, AuthRequestHeaders } from "@/api/@types";
import { BlogsAPIResponse } from './@types'

export type Methods = MethodsDefineUtil<{
    /**
     * ブログ記事の全件取得
     */
    get: {
        query?: MicroCMSQueries;
        reqHeaders: AuthRequestHeaders;
        
        resBody: BlogsAPIResponse;
    }
}>