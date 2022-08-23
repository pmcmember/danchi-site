import Head from 'next/head';
import React from 'react'
import { PageDescriptions, PageNames, PageTitles } from '@/const/pages';

type Props = {
    page: PageNames;
    children: React.ReactNode;
    className?: string;
}

export const PageContentsWrapper: React.VFC<Props> = ({
    page,
    children,
    className,
}) => {
    const SITE_NAME = "DANCHi"
    const DEFAULT_DESCRIPTION = "フリー音源"
    const pageTitle = `${page === "top" ? "": `${PageTitles.get(page)} | `}${SITE_NAME}`
    const pageDescription = PageDescriptions.get(page) || DEFAULT_DESCRIPTION
    
    return (
        <div>
            <Head>
                <title key="title">{pageTitle}</title>
                <meta key="description" name="description" content={pageDescription}/>
                {/**TODO: OGPを追加する */}
            </Head>
            
            {children}
        </div>
    )
}
