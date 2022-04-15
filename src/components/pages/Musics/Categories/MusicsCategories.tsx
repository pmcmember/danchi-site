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
import { IconButton, FormControl,  InputLabel, Select, MenuItem } from '@mui/material'
import Link from 'next/link';



export const MusicsCategories: NextPage<Props> = ({musics, category, categories}) => {
    const [currentCategory, setCurrentCategory] = React.useState<typeof category>(category)
    const [currentMusics, setCurrentMusics] = React.useState<typeof musics>(musics)
    const [isContentsReload, setIsContentsReload] = React.useState<boolean>(false);
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

    const onCategorySelectChange = React.useCallback(async (e: SelectChangeEvent) => {
        const value = e.target.value;

        history.replaceState('','',value);
        setCurrentCategory(value)
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
                            <h1>カテゴリー一覧</h1>
                            <FormControl className="lg:w-1/3 md:w-1/2 w-full">
                                <InputLabel id="select-music-categories">カテゴリ</InputLabel>
                                <Select
                                    labelId="select-music-categories"
                                    label="カテゴリ"
                                    onChange={onCategorySelectChange}
                                >
                                    {categories.map((d) => (
                                        <MenuItem value={d.name}>
                                            {d.name}
                                        </MenuItem>
                                    ))}
                                </Select>
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
            
            {musics && (
                <PlaySongUI
                    soundCloudContents={musics.contents}
                />
            )}
        </PageContentsWrapper>
    )
}
