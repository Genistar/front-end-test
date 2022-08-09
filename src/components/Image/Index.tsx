import React from 'react';
import image1 from '../../assets/image1.svg';
import styles from './Style.module.scss';

type Props = {
    image: string,
    float?: any
}

const Image = (props: Props) => {
    const { image, float } = props
    return (
        <div className={styles.container}>
            <img src={image} alt="" className={styles.image} />
            <div className={styles.text} style={{ float: float }}>
                <div className={styles.bg_text} >
                    <h1 className={styles.text_head}>Abstract Design</h1>
                    <p className={styles.text_body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className={styles.text_footer}>
                        See project
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Image