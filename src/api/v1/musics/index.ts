import { MicroCMSQueries } from "microcms-js-sdk"
import { MethodsDefineUtil, AuthRequestHeaders } from "@/api/@types";
import { MusicsAPIResponse } from './@types'

export type Methods = MethodsDefineUtil<{
    /**
     * 曲の全件取得
     */
     get: {
        query?: MicroCMSQueries;
        reqHeaders: AuthRequestHeaders;
        
        resBody: MusicsAPIResponse;
    }
}>