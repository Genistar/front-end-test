import React from 'react';
import Person from '../Person';
import styles from './Style.module.scss';
import jhon from '../../assets/Person/Jhon.svg'
import thomas from '../../assets/Person/Thomas.svg'
import jessica from '../../assets/Person/Jessica.svg'
import tom from '../../assets/Person/Tom.svg'
export type person = {
    name: string;
    image: string;
    job: string;
    float: string
}[]
type Props = {
    isIncrease: Boolean;
}

const Team = (props: Props) => {
    const { isIncrease } = props
    const data: person = [
        {
            name: 'Jhon Deo',
            image: jhon,
            job: 'Digital Marketing Manager',
            float: 'left'
        },
        {
            name: 'Thomas',
            image: thomas,
            job: 'Web Developer',
            float: 'right'
        },
        {
            name: 'Jessica',
            image: jessica,
            job: 'Business Analyst',
            float: 'left'
        },
        {
            name: 'Tom',
            image: tom,
            job: 'Fullstack developer',
            float: 'right'
        }
    ]
    const person = data.map((d, index) => (
        <Person key={index} name={d.name} image={d.image} job={d.job} float={d.float} />
    ))
    return (
        <div className={styles.container} style={{ position: 'absolute', top: isIncrease === false ? 0 : 1125 }}>
            <h1 className={styles.content}>
                Our Team
            </h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className={styles.person}>
                {person}
            </div>
        </div>
    )
}

export default Team