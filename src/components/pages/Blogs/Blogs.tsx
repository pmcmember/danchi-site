import type { NextPage } from 'next'

import { ResponsiveCard } from '@/components/ui/Cards'

import { ColumnsListParent, ColumnsListChild } from '@/components/ui/Layouts/ColumnsList'
import { Overview } from '@/components/ui/Overview/Overview'
import { Section } from '@/components/ui/Layouts/Sections'

// dev sample
import { blogData } from '@/samples/BlogData'
import { Pagination } from '@/components/ui/Pagination'

export const Blogs: NextPage = () => {
    return (
        <div className="bg-white w-full pt-20 pb-16 md:pb-24">
            <Section>
                <Overview page="blogs" hideHeader hideLink>
                    <ColumnsListParent>
                        {blogData.map((blog) => (
                            <ColumnsListChild key={blog.slug}>
                                <article>
                                    <ResponsiveCard
                                        href={`/blogs/${blog.slug}`}
                                        description={blog.description}
                                        title={blog.title}
                                        img={blog.img}
                                        tags={blog.tags}
                                    />
                                </article>
                            </ColumnsListChild>
                        ))}
                    </ColumnsListParent>
                    
                    <div className="text-center mt-10 sm:mt-20">
                        <div className="m-auto">
                            <Pagination
                                currentNumber={1}
                                basePath={`/blogs`}
                                numberOfPages={8}
                            />
                        </div>
                    </div>
                </Overview>
            </Section>
        </div>
    )
}