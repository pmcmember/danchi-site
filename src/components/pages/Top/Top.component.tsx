import { BlogsResultList } from '@/api/@types'
import { SquareImageCard } from '@/components/ui/Cards'
import { Section } from '@/components/ui/Layouts'
import styles from './Top.module.css'
import { Image } from '@/components/ui/Image'
import { ContactOverview } from '../Contact/Contact'
import { Menu } from '@/components/ui/Layouts'

type HeroImage = {
    src: string
    subTitle: string
    title: string
}

export const HeroImage: React.FC<HeroImage> = ({ src, subTitle, title }) => (
    <div
        className={styles.hiroImage}
        style={{ backgroundImage: `url(${src})` }}
    >
        <div>
            <p className={styles.hiroImage__text}>{subTitle}</p>
            <h2 className={styles.hiroImage__title}>{title}</h2>
        </div>
    </div>
)

type Profile = {
    imgSrc: string
    profileText: string
}

export const Profile: React.FC<Profile> = ({ imgSrc, profileText }) => (
    <div className={styles.profile}>
        <div className={styles.profile__left}>
            <div className={styles.profile__text}>{profileText}</div>
        </div>
        <div className={styles.profile__partition}></div>
        <div className={styles.profile__right}>
            <img
                src={imgSrc}
                alt="プロフィール画像"
                className={styles.profile__image}
            />
        </div>
    </div>
)

type EyeCatch = {}

export const EyeCatch: React.FC<EyeCatch> = () => (
    <div className={styles.eyeCatch}>
        <Image />
    </div>
)

type BaseSectionType = {
    className?: React.ComponentProps<typeof Section>['className']
    bgColor?: React.ComponentProps<typeof Section>['bgColor']
}

type BlogsSection = {
    contents: BlogsResultList
} & BaseSectionType

export const BlogsSection: React.FC<BlogsSection> = ({
    contents,
    className,
    bgColor,
}) => (
    <Section
        title="活動報告"
        className={className}
        bgColor={bgColor}
        pageLink={'blogs'}
    >
        <Menu
            contents={contents.contents.map((content) => (
                <SquareImageCard
                    title={content.title}
                    href={content.id}
                    tags={content.tags && content.tags.map((t) => t.tag)}
                    Image={
                        <Image
                            src={content.image?.url}
                            alt={`${content.title}のイメージ`}
                            className="object-cover"
                        />
                    }
                />
            ))}
        />
    </Section>
)

type MusicsSection = {
    contents: BlogsResultList
} & BaseSectionType

export const MusicsSection: React.FC<MusicsSection> = ({
    contents,
    className,
    bgColor,
}) => (
    <Section
        title="音楽作品"
        className={className}
        bgColor={bgColor}
        pageLink={'musics'}
    >
        <Menu
            contents={contents.contents.map((content) => (
                <SquareImageCard
                    title={content.title}
                    href={content.id}
                    tags={content.tags && content.tags.map((t) => t.tag)}
                    Image={
                        <Image
                            src={content.image?.url}
                            alt={`${content.title}のイメージ`}
                            className="object-cover"
                        />
                    }
                />
            ))}
        />
    </Section>
)

type VideosSection = {
    contents: BlogsResultList
} & BaseSectionType

export const VideosSection: React.FC<VideosSection> = ({
    contents,
    className,
    bgColor,
}) => (
    <Section
        title="動画作品"
        className={className}
        bgColor={bgColor}
        pageLink={'videos'}
    >
        <Menu
            contents={contents.contents.map((content) => (
                <SquareImageCard
                    title={content.title}
                    href={content.id}
                    tags={content.tags && content.tags.map((t) => t.tag)}
                    Image={
                        <Image
                            src={content.image?.url}
                            alt={`${content.title}のイメージ`}
                            className="object-cover"
                        />
                    }
                />
            ))}
        />
    </Section>
)

type ContactSection = {} & BaseSectionType

export const ContactSection: React.FC<ContactSection> = ({
    className,
    bgColor,
}) => (
    <Section title="お問い合わせ" className={className} bgColor={bgColor}>
        <ContactOverview />
    </Section>
)
