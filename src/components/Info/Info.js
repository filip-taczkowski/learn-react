import React from 'react';
/* Import JS */
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imageSrc={settings.info.image} />
    <p>
      {settings.info.content}
    </p>
    <footer>
      {settings.info.author}
    </footer>
  </Container>
);

export default Info;