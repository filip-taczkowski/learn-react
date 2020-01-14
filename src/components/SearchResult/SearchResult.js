import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import Container from '../Container/Container';
import Card from '../Card/Card';
//import ListLink from '../ListLink/ListLink';
/* Import Styles */
import styles from './SearchResult.scss';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    lists: PropTypes.array,
  }

  render () {
    const { cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h2 className={styles.title}>Search results:</h2>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>


      </Container>
    );
  }
}

export default SearchResult;
