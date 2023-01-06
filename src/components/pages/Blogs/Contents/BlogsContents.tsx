import type { NextPage } from 'next'
import React from 'react'
import { PageContentsWrapper } from '@/components/ui/Layouts'
import { PageNames } from '@/const/pages'
import { Props } from './getStaticProps'
import { BlogsContentsOverview } from './BlogsContents.component'
import { Article } from '@/components/ui/Layouts/Article'

export const BlogsContents: NextPage<Props> = ({ blogs, blogContents }) => {
    const pageName: PageNames = 'blogs'

    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            <Article>
                <BlogsContentsOverview
                    blogs={blogs}
                    blogContents={blogContents}
                />
            </Article>
        </PageContentsWrapper>
    )
}
