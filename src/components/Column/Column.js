import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
/* Import Styles */
import styles from './Column.scss';


class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.string,
      addCard: PropTypes.func,
    }

    static defaultProps = {
      title: 'Default column title',
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {title, icon, cards, addCard} = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>
        </section>
      );
    }
}

export default Column;