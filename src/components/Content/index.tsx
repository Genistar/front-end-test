import React from 'react';
import styles from './Style.module.scss'

type Props = {}

const Content = (props: Props) => {
    return (
        <div>
            <div className={styles.content}>
                Createtive
                Innovative
                Design Agency
            </div>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

    )
}

export default Content