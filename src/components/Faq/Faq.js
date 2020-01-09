import React from 'react';
/* Import JS */
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
/* Import Stlyes */
import styles from './Faq.scss';


const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title} imageSrc={settings.faq.image} />
    <ul className={styles.faq__list}>
      {settings.faq.questions.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  </Container>
);

export default Faq;