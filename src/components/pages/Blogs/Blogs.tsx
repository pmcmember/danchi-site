import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { ResponsiveCard } from '@/components/ui/Cards'

import {
    ColumnsList,
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts'

// dev sample
import { blogData } from '@/samples/BlogData'
import { Pagination } from '@/components/ui/Pagination'
import { PageTitles } from '@/const/pages'

export const Blogs: NextPage = () => {
    const router = useRouter();
    // page id(pid)をページパスから抽出
    // pidが配列の場合(pid以下に階層がある場合)はpidを抽出
    // stringの場合はそのまま抽出
    // undefinedの場合は1ページ目と同義なので1
    const pid: string =
        Array.isArray(router.query.pid)? router.query.pid[0]
        : router.query.pid || "1";

    return (
        <PageContentsWrapper
            page="blogs"
            className="bg-white"
        >
            <Section>
                <Overview page="blogs" hideHeader hideLink>
                    <BlogsOverview
                        paginationConf={{
                            currentPageId: Number(pid),
                            numberOfPages: 8
                        }}
                    />
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}


type BlogsOverviewProps = {
    paginationConf?: {
        currentPageId: number;
        numberOfPages: number;
    }
}
export const BlogsOverview: React.VFC<BlogsOverviewProps> = ({
    paginationConf
}) => {
    return (
        <>
            <ColumnsList.Parent>
                {blogData.map((blog) => (
                    <ColumnsList.Child key={blog.slug}>
                        <ResponsiveCard
                            href={`/blogs/contents/${blog.slug}`}
                            description={blog.description}
                            title={blog.title}
                            img={blog.img}
                            tags={blog.tags}
                        />
                    </ColumnsList.Child>
                ))}
            </ColumnsList.Parent>
            
            {paginationConf && (
                <div className="text-center mt-10 sm:mt-20">
                    <div className="m-auto">
                        <Pagination
                            currentNumber={paginationConf.currentPageId}
                            basePath={`/blogs`}
                            numberOfPages={paginationConf.numberOfPages}
                        />
                    </div>
                </div>
            )}
        </>
    )
}