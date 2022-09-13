import Link from 'next/link'
import styles from './StandardCard.module.css'

type Props = {
    title: string
    Description: React.ReactElement | React.ReactNode
    Image: React.ReactElement
    href: string
    aspect?: 'aspect-video' | 'aspect-square' | 'aspect-article'
}

export const StandardCard: React.FC<Props> = ({
    title,
    Description,
    Image,
    href,
    aspect,
}) => (
    <article className={styles.card}>
        <Link href={href}>
            <a>
                <div className={styles.head}>
                    <figure
                        className={`${styles.img} ${
                            aspect === 'aspect-video'
                                ? styles.video_aspect
                                : aspect === 'aspect-square'
                                ? styles.square_aspect
                                : styles.article_aspect
                        }`}
                    >
                        {Image}
                    </figure>
                </div>
                <div className={styles.body}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.description}>{Description}</div>
                </div>
            </a>
        </Link>
    </article>
)
