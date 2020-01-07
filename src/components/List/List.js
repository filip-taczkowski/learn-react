import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
/* Import JS */
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
/* Import Styles */
import styles from './List.scss'; 


class List extends React.Component { 
    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

    render() {
      const {title, image, description, columns, addColumn} = this.props;

      return (
        <Container>
          <section className={styles.components}>
            <Hero titleText={title} imageSrc={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>    
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn} />
            </div>
          </section>
        </Container>
      );
    }
}

export default List;