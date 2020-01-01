import React from 'react'
/* Import  NPM */
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; 
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
        return (
            <div className={styles.component}>{this.props.title}</div>
        )
    }
}

export default Card;