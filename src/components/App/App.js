import React from 'react';
/* Import NPM */
import {DragDropContext} from 'react-beautiful-dnd';
/* Import JS */
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
/* Import Styles */
import styles from './App.scss';
//import { listData } from '../../data/dataStore';



class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;

    const moveCardHandler = result => {
      console.log(result);
    };

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </DragDropContext>
      </main>
    );
  }
}

export default App;
