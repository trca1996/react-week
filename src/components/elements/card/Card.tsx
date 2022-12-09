import type { ReactNode } from 'react'

import styles from './Card.module.css'

export interface CardProps {
    title?: string
    description?: string
    body?: string
    children?: ReactNode
}

const Card = ({ title = '', description = '', body = '', children }: CardProps) => {
    return (
        <div className={styles.card}>
            {/* <Element value={<h2>{title}</h2>} /> */}
            {title && <h2>{title}</h2>}
            {description && <h5>{description}</h5>}
            {children}
            {body && <p>{body}</p>}
        </div>
    )
}

export default Card
