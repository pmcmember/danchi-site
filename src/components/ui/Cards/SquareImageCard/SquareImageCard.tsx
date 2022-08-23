import Link from 'next/link'
import style from './SquareImageCard.module.css'

type Props = {
    title: string
    tags?: string[]
    Image: React.ReactElement
    href: string
}

export const SquareImageCard: React.FC<Props> = ({
    title,
    tags,
    Image,
    href,
}) => (
    <article className={style.card}>
        <Link href={href}>
            <a className={style.head}>
                <figure className={style.img}>{Image}</figure>
            </a>
        </Link>
        <div className={style.body}>
            <h3 className={style.title}>{title}</h3>
            <ul className={style.tags}>
                {tags &&
                    tags.map((tag) => <li className={style.tag}>{tag}</li>)}
            </ul>
        </div>
    </article>
)
