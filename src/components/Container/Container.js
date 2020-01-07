import React from 'react';

/* Import NPM */
import PropTypes from 'prop-types';

/* Import Styles */
import styles from './Container.scss';

const Container = props => (
  <div className={styles.component}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
