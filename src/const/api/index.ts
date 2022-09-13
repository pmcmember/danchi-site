export const apiConfig = {
    authorizationKey: process.env.NEXT_PUBLIC_API_AUTHORIZATION_KEY!,
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASEURL!,
} as const

Object.keys(apiConfig).forEach((key) => {
    const _key = key as keyof typeof apiConfig
    if (!apiConfig[_key]) {
        new Error(`${key} is undefined`)
    }
})
