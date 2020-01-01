import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
/* Import Styles */
import styles from './Column.scss';


class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
    }

    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }

    static defaultProps = {
      title: 'Default column title',
    }

    addCard(title) {
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title,
            },
          ],
        }
      ));

    }

    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={this.props.icon} />
            </span>
            {this.props.title}
          </h3>
          {this.state.cards.map(({key, ...cardProps}) =>(
            <Card key={key} {...cardProps} />
          ))}
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>
        </section>
      );
    }
}

export default Column;