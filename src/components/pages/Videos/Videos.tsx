import type { NextPage } from 'next'
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { PageNames } from '@/const/pages';

export const Videos: NextPage = () => {
    const pageName: PageNames = "videos"

    return (
        <PageContentsWrapper
            page={pageName}
            className="bg-white"
        >
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    <VideosOverview/>
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}

export const VideosOverview: React.VFC = () => {
    return (
        <>videos</>
    )
}