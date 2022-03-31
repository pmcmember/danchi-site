import type { NextPage } from 'next'

import { ResponsiveCard } from '@/components/ui/Cards'

import {
    ColumnsList,
    Overview,
    Section
} from '@/components/ui/Layouts'
// import { Overview } from '@/components/ui/Layouts/Overview'

// dev sample
import { blogData } from '@/samples/BlogData'
import { Pagination } from '@/components/ui/Pagination'

export const Blogs: NextPage = () => {
    return (
        <div className="bg-white w-full pt-20 pb-16 md:pb-24">
            <Section>
                <Overview page="blogs" hideHeader hideLink>
                    <ColumnsList.Parent>
                        {blogData.map((blog) => (
                            <ColumnsList.Child key={blog.slug}>
                                <ResponsiveCard
                                    href={`/blogs/${blog.slug}`}
                                    description={blog.description}
                                    title={blog.title}
                                    img={blog.img}
                                    tags={blog.tags}
                                />
                            </ColumnsList.Child>
                        ))}
                    </ColumnsList.Parent>
                    
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