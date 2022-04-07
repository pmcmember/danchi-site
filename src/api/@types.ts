import { AspidaMethods } from 'aspida'

export type MethodsDefineUtil<T extends AspidaMethods> = T

export type StandardResponse = {
    message: string;
}

export type AuthRequestHeaders = {
    "X-Api-Key": string;
    Authorization: string;
}