import React, { useState } from 'react'
import Image from '../Image/Index';
import styles from './Style.module.scss';
import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'
import image3 from '../../assets/image3.svg'
import image4 from '../../assets/image4.svg'
import image5 from '../../assets/image5.svg'
import image6 from '../../assets/image6.svg'

type Props = {
    onGetDisplay: (data: any) => void
}

const Work = (props: Props) => {
    const [display, setDisplay] = useState<Boolean>(false)
    const { onGetDisplay } = props;
    const data = [
        {
            image: image1,
            float: 'left'
        },
        {
            image: image2,
            float: 'right'
        },
        {
            image: image3,
            float: 'left'
        },
        {
            image: image4,
            float: 'right'
        },
        {
            image: image5,
            float: 'left'
        },
        {
            image: image6,
            float: 'right'
        }

    ]
    const image = data.map(d => (
        <Image image={d.image} float={d.float} />
    ))
    const onHandleClick = () => {
        setDisplay(!display)

    }
    onGetDisplay(display);
    return (
        <div className={styles.container}>
            <h1 className={styles.content}>Work</h1>
            <div className={styles.image1} style={{ height: display === false ? 1145 : 2290 }}>
                {image}
            </div>
            <div className={styles.button} onClick={onHandleClick} style={{ top: display === false ? 1876.05 : 3001.05 }}>
                <span>{display === false ? 'See all' : 'Close'}</span>
            </div>
        </div>
    )
}

export default Work