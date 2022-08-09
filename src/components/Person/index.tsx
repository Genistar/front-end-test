import React from 'react';
import styles from './Style.module.scss';
import jhon from '../../assets/Person/Jhon.svg'

type Props = {
    name: string,
    image: string,
    job: string,
    float: any
}

const Person = (props: Props) => {
    const { name, image, job, float } = props;
    return (
        <div className={styles.container}>
            <img src={image} alt="" className={styles.image} />
            <div className={styles.detail} style={{ float: float }}>
                <p className={styles.name}>{name}</p>
                <p className={styles.job}>{job}</p>
            </div>
        </div>
    )
}

export default Person