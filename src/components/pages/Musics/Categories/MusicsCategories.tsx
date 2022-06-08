import { NextPage } from 'next'
import React from 'react'
import { MusicsOverview } from "@/components/pages/Musics";
import { Props } from './getStaticProps'
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { PageNames } from '@/const/pages';
import { PlaySongUI } from '@/components/ui/UIs';
import { SelectChangeEvent} from '@mui/material'
import { client } from '@/lib/aspida';
import {
    FormControl,
    Chip
} from '@mui/material'
import Link from 'next/link';
import { SearchInput } from '@/components/ui/Inputs';



export const MusicsCategories: NextPage<Props> = ({musics, category, categories}) => {
    const [currentCategory, setCurrentCategory] = React.useState<typeof category>(category)
    const [currentMusics, setCurrentMusics] = React.useState<typeof musics>(musics)
    const [isContentsReload, setIsContentsReload] = React.useState<boolean>(false);
    const [searchContent, setSearchContent] = React.useState<string>("");
    const pageName: PageNames = "musics";


    React.useEffect(() => {
        if(currentCategory && category !== currentCategory) {

            setIsContentsReload(true);
            client.v1.musics.$get({
                query: {
                    filters: "songCategories.songCategory.songCategory[contains]" + (currentCategory || "")
                }
            }).then((musicsFetchResult) => {
                setCurrentMusics(musicsFetchResult)
                setIsContentsReload(false);
            })
        }
    }, [currentCategory])

    const onCategorySearch = React.useCallback(async (searchContent: string) => {
        history.replaceState('','',searchContent);
        setCurrentCategory(searchContent)
    }, [])


    return (
        <PageContentsWrapper
            page={pageName}
            className="bg-white"
        >
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    {categories && (
                        <div className="flex flex-col gap-4 mb-24">
                            <div>カテゴリー：<span>{currentCategory}</span></div>
                            <FormControl className="w-full flex flex-col gap-5">
                                <SearchInput
                                    value={searchContent}
                                    onFormChange={(e) => setSearchContent(e.target.value)}
                                    placeholder="検索したいカテゴリを入力してください"
                                    onSearchButtonClick={() => onCategorySearch(searchContent)}
                                />
                                <div className="flex flex-wrap gap-3">
                                    {categories.map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => {
                                                setSearchContent(c.name)
                                                onCategorySearch(c.name)
                                            }}
                                            className="cursor-pointer"
                                        >
                                            <Chip
                                                label={c.name}
                                                variant="outlined"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </FormControl>
                        </div>
                    )}
                    {currentMusics ? (
                        <MusicsOverview
                            contents={currentMusics}
                            isContentsReloading={isContentsReload}
                        />
                    ) : (
                        <>楽曲が存在しません</>
                    )}
                </Overview>
            </Section>
            /
            {musics && (
                <PlaySongUI
                    soundCloudContents={musics.contents}
                />
            )}
        </PageContentsWrapper>
    )
}
