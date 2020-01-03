import React from 'react';
/* Import  NPM */
import PropTypes from 'prop-types'; 
/* Import  JS */ 

/* Import  Styles */ 
import styles from './Card.scss';

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
    }

    static defaultProps = {
      title: 'Default Card Title',
    }

    render () {
      const {title} = this.props;

      return (
        <div className={styles.component}>{title}</div>
      );
    }
}

export default Card;