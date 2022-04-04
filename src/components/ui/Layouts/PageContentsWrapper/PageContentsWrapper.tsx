import Head from 'next/head';
import React from 'react'
import { PageDescriptions, PageNames, PageTitles } from '@/const/pages';

type Props = {
    /**
     * full     : 100%
     * large    : 1500px
     * standard : 1200px
     * medium   : 800px
     * default  : 1100px
     */
    maxWidth?: "full" | "large" | "standard" | "medium";
    page: PageNames;
    children: React.ReactNode;
    className?: string;
}

export const PageContentsWrapper: React.VFC<Props> = ({
    page,
    children,
    className,
    maxWidth
}) => {
    const SITE_NAME = "DANCHI"
    const DEFAULT_DESCRIPTION = "フリー音源"
    const pageTitle = `${page === "top" ? "": `${PageTitles.get(page)} | `}${SITE_NAME}`
    const pageDescription = PageDescriptions.get(page) || DEFAULT_DESCRIPTION
    const maxWidthSize =
        maxWidth === "full"? "100%"
        : maxWidth === "large"? "1500px"
        : maxWidth === "standard"? "1100px"
        : maxWidth === "medium"? "800px"
        : "1100px"
    
    return (
        <div
            className={`${className || ""} w-full pt-8 mx-auto pb-16 md:pb-24`}
            style={{maxWidth: maxWidthSize}}
        >
            <Head>
                <title key="title">{pageTitle}</title>
                <meta key="description" name="description" content={pageDescription}/>
                {/**TODO: OGPを追加する */}
            </Head>
            
            {children}
        </div>
    )
}
