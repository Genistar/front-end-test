import React from 'react';
import Card from '../Card';
import styles from './Style.module.scss'

type Props = {
    isIncrease: Boolean
}

const Service = (props: Props) => {
    const { isIncrease } = props;
    return (
        <div className={styles.container} style={{ position: 'absolute', top: isIncrease === false ? 0 : 1125 }}>
            <h1 className={styles.content}>Services</h1>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Service