import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { ResponsiveCard } from '@/components/ui/Cards'

import {
    ColumnsList,
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts'
// import { Pagination } from '@/components/ui/Pagination'
import { PageTitles } from '@/const/pages'
import { Props } from './getStaticProps'
import Twitter from "@/assets/twitter-icon.png";
import { Pagination } from '@mui/material'

export const Blogs: NextPage<Props> = ({blogs, currentPage, totalPages}) => {
    return (
        <PageContentsWrapper
            page="blogs"
            className="bg-white"
        >
            <Section>
                <Overview page="blogs" hideHeader hideLink>
                    <BlogsOverview
                        paginationConf={{
                            currentPageId: Number(currentPage),
                            totalPages: Number(totalPages)
                        }}
                        blogs={blogs}
                    />
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}


type BlogsOverviewProps = {
    paginationConf?: {
        currentPageId: number;
        totalPages: number;
    }
    blogs: Props['blogs']
}

export const BlogsOverview: React.VFC<BlogsOverviewProps> = ({
    paginationConf,
    blogs
}) => {
    return (
        <>
            {blogs?.contents ? (
                <>
                    <ColumnsList.Parent>
                        {blogs.contents.map((blog) => (
                            <ColumnsList.Child key={blog.id}>
                                <ResponsiveCard
                                    href={`/blogs/contents/${blog.id}`}
                                    description={blog.description}
                                    title={blog.title}
                                    image={blog.image || {
                                        url: Twitter.src,
                                        width: 50,
                                        height: 50
                                    }}
                                    tags={blog.tags}
                                />
                            </ColumnsList.Child>
                        ))}
                    </ColumnsList.Parent>
                    
                    {paginationConf && (
                        <div className="text-center mt-10 sm:mt-20">
                            <div className="flex justify-center">
                                <Pagination
                                    count={paginationConf.totalPages}
                                    page={paginationConf.currentPageId}
                                    variant="outlined"
                                    shape="rounded"
                                    color="primary"
                                />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div>コンテンツが存在しませんでした。</div>
            )}
        </>
    )
}