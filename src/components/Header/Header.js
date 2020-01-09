import React from 'react';
/* Import NPM */
import {NavLink, Link} from 'react-router-dom';
/* Import JS */
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
/* Import Styles */
import styles from './Header.scss';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name='dragon' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}


export default Header;