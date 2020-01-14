import React from 'react';
/* Import NPM */
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
/* Import JS */
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';
import List from '../List/ListContainer';
import SearchResult from '../SearchResult/SearchResultContainer';
/* Import Styles */
import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0}}
        atLeave={{ opacity: 0}}
        atActive={{ opacity: 1}}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:id' component={SearchResult} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
