import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { BsTagsFill } from 'react-icons/bs'
import Twitter from '@/assets/twitter-icon.png'
import Link from 'next/link'
import { ResponsiveCard } from '@/components/ui/Cards'
import { LinkButton } from '@/components/ui/Buttons'
import { FormatDateUtil } from '@/utilities/format'
import styles from './BlogsContents.module.css'
import { Props } from './getStaticProps'
import { ProfileCard } from '@/components/ui/Cards/ProfileCard'

type BlogsContentsOverviewProps = Props

export const BlogsContentsOverview: React.VFC<BlogsContentsOverviewProps> = ({
    blogs,
    blogContents,
}) => {
    return (
        <div className={styles.blog}>
            <div className={styles.blog__content}>
                <BlogMain blogContents={blogContents} />
                <BlogSidebar blogs={blogs} />
            </div>
            <div className={styles.blog__button}>
                <LinkButton href="/">トップページへ戻る</LinkButton>
            </div>
        </div>
    )
}

type BlogMain = {
    blogContents: Props['blogContents']
}

const BlogMain: React.VFC<BlogMain> = ({ blogContents }) => {
    return (
        <main className="lg:w-8/12 xl:w-3/4">
            <div>
                <header className="flex flex-col gap-4 mb-24">
                    {/** 日付 */}
                    <div className="flex gap-2 items-center">
                        <BiCalendar />
                        <time
                            dateTime={FormatDateUtil.getDate(
                                new Date(blogContents.updatedAt),
                                '-'
                            )}
                        >
                            {FormatDateUtil.getDate(
                                new Date(blogContents.updatedAt),
                                '/'
                            )}
                            に公開
                        </time>
                    </div>

                    {/** タイトル */}
                    <h1 className="font-bold sm:text-4xl text-3xl">
                        {blogContents.title}
                    </h1>

                    {/** タグ */}
                    <div className="flex items-center gap-2">
                        <BsTagsFill className="text-xl" />
                        {blogContents.tags ? (
                            <div className="flex gap-3">
                                {blogContents.tags.map((tag) => (
                                    <div key={tag.tag}>{tag.tag}</div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ fontSize: '10px' }}>タグ無し</div>
                        )}
                    </div>

                    {/** 画像 */}
                    {blogContents.image?.url && (
                        <img
                            src={blogContents.image.url}
                            alt={`${blogContents.title}のイメージ`}
                        />
                    )}
                </header>
                <div className="flex flex-col gap-8">
                    <BlogContent content={blogContents.content} />
                </div>
            </div>
        </main>
    )
}

type TableOfContents = {
    sections: {
        title: string
        id: string
        tagName: string
    }[]
}
const TableOfContents: React.VFC<TableOfContents> = ({ sections }) => {
    return (
        <div id="tableOfContents" className={styles.tableOfContents}>
            <header>
                <h2 className={styles.tableOfContents__title}>目次</h2>
            </header>
            <div>
                <ul className={styles.tableOfContents__lists}>
                    {sections.map((s) => {
                        const margin = 10
                        const listStyles =
                            s.tagName === 'H1'
                                ? {}
                                : s.tagName === 'H2'
                                ? {
                                      marginLeft: `${
                                          Number(s.tagName[1]) * margin
                                      }px`,
                                  }
                                : s.tagName === 'H3'
                                ? {
                                      marginLeft: `${
                                          Number(s.tagName[1]) * margin
                                      }px`,
                                  }
                                : s.tagName === 'H4'
                                ? {
                                      marginLeft: `${
                                          Number(s.tagName[1]) * margin
                                      }px`,
                                  }
                                : s.tagName === 'H5'
                                ? {
                                      marginLeft: `${
                                          Number(s.tagName[1]) * margin
                                      }px`,
                                  }
                                : {}

                        return (
                            <li
                                className={styles.tableOfContents__list}
                                key={s.id}
                                style={listStyles}
                            >
                                <Link href={`#${s.id}`}>
                                    <a>{s.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

type BlogContent = {
    content: Props['blogContents']['content']
}

const BlogContent: React.VFC<BlogContent> = ({ content }) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [tableOfContents, setTableOfContents] = React.useState<
        TableOfContents['sections']
    >([])

    React.useLayoutEffect(() => {
        if (!ref.current) {
            return
        }

        // 目次の作成
        const tmpTableOfContents: TableOfContents['sections'] = []

        Array.from(ref.current.querySelectorAll('h1,h2,h3,h4,h5') || []).map(
            (html) => {
                html.textContent &&
                    tmpTableOfContents.push({
                        title: html.textContent,
                        id: html.id,
                        tagName: html.tagName,
                    })
            }
        )
        setTableOfContents(tmpTableOfContents)
    }, [content])

    return (
        <div>
            {tableOfContents.length > 0 && (
                <TableOfContents sections={tableOfContents} />
            )}
            <div
                ref={ref}
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
                className={styles.blogContents}
            />
        </div>
    )
}

type BlogSidebar = {
    blogs?: Props['blogs']
}

const BlogSidebar: React.VFC<BlogSidebar> = ({ blogs }) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__content}>
                <ProfileCard
                    image={Twitter.src}
                    username={'DANCHi'}
                    text={
                        '自己紹介が入ります。自己紹介が入ります。自己紹介が入ります。'
                    }
                    className={styles.profileCard}
                />
                <div className={styles.related}>
                    <h3 className={styles.related__title}>関連記事</h3>
                    <ul className={styles.related__lists}>
                        {blogs ? (
                            blogs.contents.map((blog) => (
                                <li
                                    key={blog.id}
                                    className={styles.related__list}
                                >
                                    <ResponsiveCard
                                        href={`/blogs/contents/${blog.id}`}
                                        description={blog.description}
                                        title={blog.title}
                                        image={
                                            blog.image || {
                                                url: Twitter.src,
                                                width: 50,
                                                height: 50,
                                            }
                                        }
                                        tags={blog.tags}
                                    />
                                </li>
                            ))
                        ) : (
                            <>関連する記事はありませんでした</>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
