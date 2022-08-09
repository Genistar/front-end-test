import React, { useState } from 'react'
import Contact from '../components/Contact'
import Content from '../components/Content'
import Service from '../components/Services'
import Team from '../components/Team'
import Topbar from '../components/Topbar'
import Work from '../components/Work';
import styles from './Style.module.scss'
type Props = {}

const LayoutPage = (props: Props) => {
    const [isIncrease, setIsIncreate] = useState<Boolean>(false)
    const onGetDisplay = (data: any) => {
        console.log(data)
        setIsIncreate(data)
    }
    console.log(isIncrease)
    return (
        <div>
            <Topbar />
            <Content />
            <Work onGetDisplay={onGetDisplay} />
            <Service isIncrease={isIncrease} />
            <Team isIncrease={isIncrease} />
            <Contact isIncrease={isIncrease} />
            <div className={styles.footer} style={{ top: isIncrease === false ? '' : (5393.02 + 1125) }}>
                <p className={styles.text1}>
                    2022 Creatives
                </p>
                <p className={styles.text2}>
                    Privacy Policy
                </p>
                <p className={styles.text3}>
                    Terms and Conditions
                </p>
            </div>
        </div>

    )
}

export default LayoutPage