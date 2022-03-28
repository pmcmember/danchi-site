import React from 'react'

import Head from 'next/head'

type Props = {
    title?: string;
    description?: string;
}


export const CustomHead: React.VFC<Props> = ({title, description}) => {
    const DEFAULT_TITLE = "DANCHI";
    const DEFAULT_DESCRIPTION = "danchiの公式サイトです。"

    return (
        <Head>
            <title>{(title? title + ' | ': '') + DEFAULT_TITLE}</title>
            <meta name="description" content={description || DEFAULT_DESCRIPTION} />
            <meta charSet='utf-8'/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}