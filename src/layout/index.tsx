import React, { useEffect, useRef, useState } from 'react'
import Contact from '../components/Contact'
import Content from '../components/Content'
import Service from '../components/Services'
import Team from '../components/Team'
import Topbar from '../components/Topbar'
import Work from '../components/Work';
import styles from './Style.module.scss'
type Props = {}
const useMountEffect = (fun: any) => useEffect(fun, []);
const LayoutPage = (props: Props) => {
    const [isIncrease, setIsIncreate] = useState<Boolean>(false);
    const myRef = useRef<any>(null);
    const workScroll = () => myRef.current.scrollIntoView();
    const servicesRef = useRef<any>(null);
    const servicesScroll = () => servicesRef.current.scrollIntoView();
    const contactRef = useRef<any>(null);
    const contactScroll = () => contactRef.current.scrollIntoView();
    const onGetDisplay = (data: any) => {
        console.log(data)
        setIsIncreate(data)
    }
    useMountEffect(workScroll);
    console.log(isIncrease)
    return (
        <div>
            <Topbar executeScroll={workScroll} servicesScroll={servicesScroll} contactScroll={contactScroll} />
            <Content />
            <Work onGetDisplay={onGetDisplay} myRef={myRef} />
            <Service isIncrease={isIncrease} servicesRef={servicesRef} />
            <Team isIncrease={isIncrease} />
            <Contact isIncrease={isIncrease} contactRef={contactRef} />
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