import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';

class List extends React.Component {
    render() {
        return (
            <section className={styles.components}>
               <Hero />
            </section>
        )
    }
}

export default List;