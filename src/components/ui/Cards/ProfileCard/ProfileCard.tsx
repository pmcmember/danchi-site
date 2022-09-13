import { LinkWithSNSIcon } from '@/const/links'
import { PageIcons } from '@/const/pages'
import Link from 'next/link'
import { Image } from '../../Image'
import styles from './ProfileCard.module.css'

type Props = {
    image: string
    username: string
    text: string
    className?: string
}

export const ProfileCard: React.FC<Props> = ({
    image,
    username,
    text,
    className,
}) => (
    <div className={`${styles.profileCard} ${className || ''}`}>
        <header className={styles.profileCard__header}>
            <div className={styles.profileCard__userinfo}>
                <div className={styles.profileCard__imageWrap}>
                    <Image src={image} className={styles.profileCard__image} />
                </div>
                <div>
                    <h2 className={styles.profileCard__user}>{username}</h2>
                    {(() => {
                        const Icon = PageIcons.get('contact')!
                        return (
                            <Link href="/contact">
                                <a className={styles.profileCard__contact}>
                                    <span>
                                        <Icon
                                            className={
                                                styles.profileCard__contactIcon
                                            }
                                        />
                                    </span>
                                    <span style={{ fontSize: '10px' }}>
                                        お問い合わせ
                                    </span>
                                </a>
                            </Link>
                        )
                    })()}
                </div>
            </div>
            <div>{text}</div>
        </header>
        <div className={styles.profileCard__content}>
            <div>
                <ul className={styles.profileCard__lists}>
                    {Array.from(LinkWithSNSIcon.keys()).map((key) => {
                        const sns = LinkWithSNSIcon.get(key)!
                        const SNSIcon = sns.Icon
                        return (
                            <li key={key} className={styles.profileCard__list}>
                                <Link href={sns.href}>
                                    <a className={styles.profileCard__sns}>
                                        <SNSIcon />
                                        <div>DANCHiをフォローする</div>
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
)
