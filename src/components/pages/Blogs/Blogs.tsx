import type { NextPage } from 'next'

import { StandardCard } from '@/components/ui/Cards'

import {
    BaseSectionType,
    Menu,
    PageContentsWrapper,
    Section,
} from '@/components/ui/Layouts'
// import { Pagination } from '@/components/ui/Pagination'
import { PageNames } from '@/const/pages'
import { Props } from './getStaticProps'
import { Chip, Stack } from '@mui/material'
import { Image } from '@/components/ui/Image'
import React from 'react'

export const Blogs: NextPage<Props> = ({ blogs, currentPage, totalPages }) => {
    const pageName: PageNames = 'blogs'
    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            <BlogsSection
                contents={blogs}
                paginationConf={{
                    currentPageId: Number(currentPage),
                    totalPages: Number(totalPages),
                }}
            />
        </PageContentsWrapper>
    )
}

type BlogsOverview = {
    paginationConf?: {
        currentPageId: number
        totalPages: number
    }
    contents: Props['blogs']
}

type BlogsSection = BlogsOverview & BaseSectionType

export const BlogsSection: React.FC<BlogsSection> = ({
    contents,
    paginationConf,
    className,
    bgColor,
    pageLink,
}) => (
    <Section
        title="活動報告"
        pageLink={pageLink}
        className={className}
        bgColor={bgColor}
    >
        <BlogsOverview contents={contents} paginationConf={paginationConf} />
    </Section>
)

export const BlogsOverview: React.VFC<BlogsOverview> = ({ contents }) => {
    return (
        <Menu
            contents={contents.contents.map((content) => (
                <StandardCard
                    key={content.id}
                    title={content.title}
                    href={`/blogs/contents/${content.id}`}
                    Description={
                        content.tags && (
                            <Stack direction="row">
                                {content.tags.map((tag) => (
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
                            src={content.image?.url}
                            alt={`${content.title}のイメージ`}
                            className="object-cover"
                        />
                    }
                />
            ))}
        />
    )
}
