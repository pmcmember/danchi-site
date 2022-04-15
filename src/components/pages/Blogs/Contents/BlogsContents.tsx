import type { NextPage } from 'next'
import React from 'react';
import {
  PageContentsWrapper,
  Section,
  Overview
} from '@/components/ui/Layouts';
import { PageNames } from '@/const/pages';
import { BiCalendar } from 'react-icons/bi'
import { BsTagsFill } from 'react-icons/bs'

import Twitter from "@/assets/twitter-icon.png";
import { LinkWithSNSIcon } from '@/const/links';
import Link from 'next/link';
import { ResponsiveCard } from '@/components/ui/Cards'
import { LinkButton } from '@/components/ui/Buttons';
import { Props } from './getStaticProps'
import { FormatDateUtil } from '@/utilities/format';
import styles from './BlogsContents.module.css';
import { PageIcons } from '@/const/pages'
import { useRouter } from 'next/router'


export const BlogsContents: NextPage<Props> = ({ blogs, blogContents }) => {
  const pageName: PageNames = "blogs"
  const router = useRouter();
  
  return (
    <PageContentsWrapper
      page={pageName}
      className="bg-white"
      maxWidth='large'
    >
      <Section>
        <Overview
          page={pageName}
          hideHeader
          hideLink
          contentsTwoColumn
        >
          <BlogsContentsOverview
            blogs={blogs}
            blogContents={blogContents}
          />
        </Overview>
      </Section>
    </PageContentsWrapper>
  )
}

type BlogsContentsOverviewProps = Props

const BlogsContentsOverview: React.VFC<BlogsContentsOverviewProps> = ({blogs, blogContents}) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row rlg:gap-40">
        <BlogMain blogContents={blogContents}/>
        <BlogSidebar blogs={blogs}/>
      </div>
    </>
  )
}


type BlogMainProps = {
  blogContents: Props['blogContents']
}

const BlogMain: React.VFC<BlogMainProps> = ({blogContents}) => {
  
  return (
    <main className="lg:w-8/12 xl:w-3/4">
      <div>
        <header className="flex flex-col gap-4 mb-24">
          {/** 日付 */}
          <div className="flex gap-2 items-center">
            <BiCalendar/>
            <time dateTime={FormatDateUtil.getDate(new Date(blogContents.updatedAt), "-")}>
              {FormatDateUtil.getDate(new Date(blogContents.updatedAt), "/")}に公開
            </time>
          </div>

          {/** タイトル */}
          <h1 className="font-bold sm:text-4xl text-3xl">
            {blogContents.title}
          </h1>

          {/** タグ */}
          <div className="flex items-center gap-2">
            <BsTagsFill className="text-xl"/>
            {blogContents.tags ? (
              <div className="flex gap-3">
                {blogContents.tags.map((tag) => (
                  <div key={tag.tag}>{tag.tag}</div>
                ))}
              </div>
            ) : (
              <div style={{fontSize: "10px"}}>タグ無し</div>
            )}
          </div>

          {/** 画像 */}
          {blogContents.image?.url && (
            <img src={blogContents.image.url} alt={`${blogContents.title}のイメージ`}/>
          )}
        </header>
        <div className="flex flex-col gap-8">
          <BlogContent content={blogContents.content}/>
          <div className="mt-16">
            <LinkButton href="/">トップページへ戻る</LinkButton>
          </div>
        </div>
      </div>
    </main>
  )
}


type TableOfContentsProps = {
  sections: {
    title: string;
    id: string;
    tagName: string;
  }[]
}
const TableOfContents: React.VFC<TableOfContentsProps> = ({sections}) => {
  return (
    <div id="tableOfContents" className="bg-gray-200 px-8 pt-4 pb-8 rounded-lg">
      <header>
        <div className="text-center mb-4">
          <h2>目次</h2>
        </div>
      </header>
      <div>
        <ul className="list-disc ml-4 flex flex-col gap-4">
          {sections.map((s) => {
            const margin = 10;
            const [listStyles, ancorStyles] = 
              s.tagName === "H1"? [{}, {fontSize: "1.25rem", lineHeight: "1.75rem"}]
              : s.tagName === "H2"? [{marginLeft: `${Number(s.tagName[1]) * margin}px`}, {fontSize: "1.25rem", lineHeight: "1.75rem"}]
              : s.tagName === "H3"? [{marginLeft: `${Number(s.tagName[1]) * margin}px`},, {fontSize: "1.25rem", lineHeight: "1.75rem"}]
              : s.tagName === "H4"? [{marginLeft: `${Number(s.tagName[1]) * margin}px`},, {fontSize: "1.25rem", lineHeight: "1.75rem"}]
              : s.tagName === "H5"? [{marginLeft: `${Number(s.tagName[1]) * margin}px`},, {fontSize: "1.25rem", lineHeight: "1.75rem"}]
              : [{}, {}]
              
            return (
              <li key={s.id} style={listStyles}>
                <Link href={`#${s.id}`}>
                  <a style={ancorStyles}>{s.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}


type BlogContentProps = {
  content: Props['blogContents']['content']
}
const BlogContent: React.VFC<BlogContentProps> = ({content}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = React.useState<TableOfContentsProps["sections"]>([])

  React.useLayoutEffect(() => {
    if( ! ref.current) {
      return;
    }
    
    // 目次の作成
    const tmpTableOfContents: TableOfContentsProps["sections"] = [];

    Array.from(ref.current.querySelectorAll("h1,h2,h3,h4,h5")).map((html) => {
      html.textContent && (
        tmpTableOfContents.push({title: html.textContent, id: html.id, tagName: html.tagName})
      )
    })
    setTableOfContents(tmpTableOfContents);
  }, [content])


  return (
    <div>
      {tableOfContents.length > 0 && (
        <TableOfContents sections={tableOfContents}/>
      )}
      <div
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: content
        }}
        className={styles.blogContents}
      />
    </div>
  )
}



type BlogSidebarProps = {
  blogs?: Props['blogs']
}

const BlogSidebar: React.VFC<BlogSidebarProps>= ({blogs}) => {
  return (
    <aside className="lg:ml-auto lg:pl-10 lg:w-4/12 xl:pl-24 xl:w-1/4">
      <div className="flex flex-col gap-20">
        <div
          className="w-full rounded-3xl border border-black px-3 pt-3 pb-8 flex gap-7 flex-col"
        >
          <header className="flex items-center gap-4">
            <div>
              <img
                width="60px"
                height="60px"
                src={Twitter.src}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl mb-2">DANCHi</h2>
              {(() => {
                const Icon = PageIcons.get("contact")!;
                return (
                  <Link href="/contact">
                    <a className="flex gap-2 items-center border border-slate-300 rounded-full px-2">
                      <span>
                        <Icon className="opacity-30"/>
                      </span>
                      <span style={{fontSize: "10px"}}>お問い合わせ</span>
                    </a>
                  </Link>
                )
              })()}
            </div>
          </header>
          <div className="flex flex-col gap-4">
            <div>
              自己紹介が入ります。自己紹介が入ります。自己紹介が入ります。
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                {Array.from(LinkWithSNSIcon.keys()).map((key) => {
                  const sns = LinkWithSNSIcon.get(key)!;
                  const SNSIcon = sns.Icon;
                  return (
                    <li
                      key={key}
                      className="border-2 border-slate-900"
                    >
                      <Link href={sns.href}>
                        <a className="flex justify-center items-center gap-4 hover:opacity-60 px-1 py-2 ">
                          <SNSIcon/>
                          <div className="text-sm">
                            DANCHiをフォローする
                          </div>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">関連記事</h3>
          <ul className="flex flex-col gap-4">
            {blogs ? (
              blogs.contents.map((blog) => (
                <li key={blog.id} className="mx-auto">
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

