import React from 'react';
import styles from './Style.module.scss'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className={styles.card_container}>
            <h1 className={styles.text_header}>
                Graphic Design
            </h1>
            <p className={styles.text_body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles.text_footer}>
                See Details
            </p>
            <div className={styles.price}>
                <h4>Start at $400</h4>
            </div>
        </div>
    )
}

export default Card