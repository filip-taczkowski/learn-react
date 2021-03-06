import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
/* Import JS */

/* Import Styles */
import styles from './Hero.scss';


const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imageSrc} ></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;