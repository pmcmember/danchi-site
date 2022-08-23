import React from 'react'
import styles from './Menu.module.css'

type Props = {
    contents: React.ReactElement[]
}

export const Menu: React.FC<Props> = ({ contents }) => (
    <ul className={styles.menus}>
        {contents.map((content) => (
            <li className={styles.menu}>{content}</li>
        ))}
    </ul>
)
