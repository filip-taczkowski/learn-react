import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
/* Import JS */
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
//import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
/* Import Styles */
import styles from './List.scss'; 


class List extends React.Component { 
    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

    render() {
      const {title, image, description, columns} = this.props;

      return (
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
          {/*
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
          </div>
          */}
        </section>
      );
    }
}

export default List;