import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { StandardCard } from '@/components/ui/Cards'

import {
    ColumnsListParent,
    ColumnsListChild,
    Overview,
    Section,
    PageContentsWrapper,
    Menu,
} from '@/components/ui/Layouts'
// import { Pagination } from '@/components/ui/Pagination'
import { PageNames, PageTitles } from '@/const/pages'
import { Props } from './getStaticProps'
import Twitter from '@/assets/twitter-icon.png'
import { Chip, Pagination, Stack } from '@mui/material'
import { Image } from '@/components/ui/Image'

export const Blogs: NextPage<Props> = ({ blogs, currentPage, totalPages }) => {
    const pageName: PageNames = 'blogs'
    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            <Section title="活動報告">
                <BlogsOverview
                    paginationConf={{
                        currentPageId: Number(currentPage),
                        totalPages: Number(totalPages),
                    }}
                    blogs={blogs}
                />
            </Section>
        </PageContentsWrapper>
    )
}

type BlogsOverviewProps = {
    paginationConf?: {
        currentPageId: number
        totalPages: number
    }
    blogs: Props['blogs']
}

export const BlogsOverview: React.VFC<BlogsOverviewProps> = ({
    paginationConf,
    blogs,
}) => {
    return (
        <Menu
            contents={blogs.contents.map((blog) => (
                <StandardCard
                    title={blog.title}
                    href={`/blogs/contents/${blog.id}`}
                    Description={
                        blog.tags && (
                            <Stack direction="row">
                                {blog.tags.map((tag) => (
                                    <Chip
                                        key={tag.fieldId}
                                        label={tag.tag}
                                        className={`mr-3 bg-amber-300`}
                                    />
                                ))}
                            </Stack>
                        )
                    }
                    Image={
                        <Image
                            src={blog.image?.url}
                            alt={`${blog.title}のイメージ`}
                            className="object-cover"
                        />
                    }
                />
            ))}
        />
    )
}
