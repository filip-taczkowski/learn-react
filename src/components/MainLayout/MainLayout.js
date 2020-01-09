import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
