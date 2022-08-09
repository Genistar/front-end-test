import React from 'react';
import styles from './Style.module.scss'

type Props = {
    isIncrease: Boolean
}

const Contact = (props: Props) => {
    const { isIncrease } = props;
    return (
        <div className={styles.container} style={{ position: 'absolute', top: isIncrease === false ? 0 : 1125 }}>
            <div className={styles.content}>
                Contact
            </div>
            <div className={styles.email}>
                contact@website.com
            </div>
            <div className={styles.phone}>
                +0 0000 0000
            </div>
            <div className={styles.social}>
                <span className={styles.tw}>Twitter</span>
                <span className={styles.li}>Linkedin</span>
                <span className={styles.db}>Dribbble</span>
                <span className={styles.ytb}>Youtube</span>
                <span className={styles.ins}>Instagram</span>
                <span className={styles.fb}>Facebook</span>
            </div>
        </div>
    )
}

export default Contact