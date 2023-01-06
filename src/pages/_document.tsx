import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head title={'danchi site'}>
                    {/** TODO: Google AnalyticsかCloudWatch RUMコードの挿入 */}
                    {/* <script type="text/javascript" src="https://w.soundcloud.com/player/api.js"></script> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
