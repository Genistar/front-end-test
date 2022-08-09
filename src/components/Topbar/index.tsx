import React, { useState } from 'react';
import styles from './Style.module.scss';
import icon from '../../assets/Icon/menu.svg'

type Props = {}

const Topbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const onHandelClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.icon}>
                <img src={icon} alt="" onClick={onHandelClick} />
            </div>
            <div className={styles.topnav}>
                <a className={styles.item} href="#home">Work</a>
                <a className={styles.item}>Services</a>
                <a className={styles.item} href="#contact">Contact</a>
            </div>
            <div className={styles.dropdown} style={{ display: isOpen === false ? 'none' : 'table' }}>
                <a className={styles.item1} href="#home">Work</a>
                <a className={styles.item2}>Services</a>
                <a className={styles.item3} href="#contact">Contact</a>
            </div>
        </div>

    )
}

export default Topbar