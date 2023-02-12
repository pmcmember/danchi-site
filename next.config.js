// loadEnv(process.env.APP_ENV)

loadEnv()

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.microcms-assets.io', 'i.ytimg.com'],
    },
}

module.exports = nextConfig

/**
 * 環境変数をファイルから読み込む
 */
function loadEnv() {
    console.log(process.env.APP_ENV)
    const appEnv = process.env.APP_ENV || 'local'
    const env = {
        ...require(`./.env/${appEnv}.json`),
        NEXT_PUBLIC_APP_ENV: appEnv,
    }

    Object.entries(env).forEach(([key, value]) => {
        process.env[key] = value
    })
}
