import type { NextPage } from 'next'
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { PageNames } from '@/const/pages';

export const Page404: NextPage = () => {
    const pageName: PageNames = "contact"

    return (
        <>404</>
        // <PageContentsWrapper
        //     page={pageName}
        //     className="bg-white"
        // >
        //     <Section>
        //         <Overview page={pageName} hideHeader hideLink>
        //             <Page404Overview/>
        //         </Overview>
        //     </Section>
        // </PageContentsWrapper>
    )
}

const Page404Overview: React.VFC = () => {
    return (
        <div>404 error</div>
    )
}