import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  PageContentsWrapper,
  Section,
  Overview
} from '@/components/ui/Layouts';
import { PageNames } from '@/const/pages';
import { BiCalendar } from 'react-icons/bi'
import { BsTagsFill } from 'react-icons/bs'
import Image from 'next/image';

import Twitter from "@/assets/twitter-icon.png";
import { LinkWithSNSIcon } from '@/const/links';
import Link from 'next/link';
import { ResponsiveCard } from '@/components/ui/Cards'
import { LinkButton } from '@/components/ui/Buttons';

// dev sample
import { blogData } from '@/samples/BlogData'


export const BlogsContents: NextPage = () => {
  const pageName: PageNames = "blogs"
  const router = useRouter()
  const { slug } = router.query

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
          <BlogsContentsOverview/>
        </Overview>
      </Section>
    </PageContentsWrapper>
  )
}

type BlogsContentsOverviewProps = {}
const BlogsContentsOverview: React.VFC<BlogsContentsOverviewProps> = () => {
  return (
    <>
      <div className="flex flex-col gap-24 lg:gap-8 lg:flex-row">
        <BlogMain/>
        <BlogSidebar/>
      </div>
    </>
  )
}


const BlogMain: React.VFC = () => {
  return (
    <main className="lg:w-3/4">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <BiCalendar/>
            <time dateTime='2022-04-01'>
              2022/04/01
            </time>
          </div>
          <h1 className="font-bold sm:text-4xl text-3xl">
            title
          </h1>
          <div className="flex items-center gap-2">
            <BsTagsFill className="text-xl"/>
            <div className="flex gap-3">
              {["tag1", "tag2", "tag3"].map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-8">
          <div>
            <div>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
            </div>
          </div>
          <div id="tableOfContents" className="bg-gray-200 px-8 pt-4 pb-8 rounded-lg">
            <header>
              <div className="text-center mb-4">
                <h2>目次</h2>
              </div>
            </header>
            <div>
              <ul className="list-disc ml-4 flex flex-col gap-4">
                <li>
                  <Link href="#section-title1">
                    <a className="font-bold text-xl">
                      section1 title
                    </a>
                  </Link>
                  <ol className="list-decimal ml-4">
                    <li>
                      <Link href="#section1-sub-title1">
                        <a className="font-bold text-lg">
                          section1 sub title1
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#section1-sub-title2">
                        <a className="font-bold text-lg">
                          section1 sub title1
                        </a>
                      </Link>
                    </li>
                  </ol>
                </li>
                <li>
                  <Link href="#section2-title">
                    <a className="font-bold text-xl">
                      section2 title
                    </a>
                  </Link>
                  <ol className="list-decimal ml-4">
                    <li>
                      <Link href="#section2-sub-title1">
                        <a className="font-bold text-lg">
                          section2 sub title1
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#section2-sub-title2">
                        <a className="font-bold text-lg">
                          section2 sub title1
                        </a>
                      </Link>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl border-b border-slate-400 pb-2" id="section1-title">section1 title</h2>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
              <h3 className="font-bold text-xl" id="section1-sub-title1">section1 sub title1</h3>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
              <h3 className="font-bold text-xl" id="section1-sub-title2">section1 sub title2</h3>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl border-b border-slate-400 pb-2" id="section2-title">section2 title</h2>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
              <h3 className="font-bold text-xl" id="section2-sub-title1">section2 sub title1</h3>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
              <h3 className="font-bold text-xl" id="section2-sub-title1">section2 sub title2</h3>
              <p className="w-11/12">
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。<br/>
                文章が入ります。文章が入ります。文章が入ります。文章が入ります。
              </p>
            </div>
          </div>
          <div className="mt-16">
            <LinkButton href="/">トップページへ戻る</LinkButton>
          </div>
        </div>
      </div>
    </main>
  )
}


const BlogSidebar: React.VFC= () => {
  return (
    <aside className="lg:w-1/4">
      <div className="flex flex-col gap-20">
        <div
          className="w-full rounded-3xl border border-black px-3 pt-3 pb-8 flex flex-col gap-7 rlg:flex-row rsm:flex-col"
          // style={{maxWidth: "250px"}}
        >
          <header>
            <div className="text-center">
              <Image
                width="200"
                height="200"
                src={Twitter.src}
                className="aspect-square"
              />
            </div>
          </header>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-bold text-xl">DANCHi</h2>
            </div>
            <div>
              自己紹介が入ります。自己紹介が入ります。自己紹介が入ります。
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                {Array.from(LinkWithSNSIcon.keys()).map((key) => {
                  const sns = LinkWithSNSIcon.get(key)!;
                  const SNSIcon = sns.Icon;
                  return (
                    <li
                      key={key}
                      className="p-1 border-2 border-slate-900"
                    >
                      <Link href={sns.href}>
                        <a className="flex justify-center items-center gap-4">
                          <SNSIcon/>
                          <div>
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
            {blogData.map((blog) => (
              <li key={blog.slug} className="mx-auto">
                <ResponsiveCard
                  href={`/blogs/contents/${blog.slug}`}
                  description={blog.description}
                  title={blog.title}
                  img={blog.img}
                  tags={blog.tags}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}