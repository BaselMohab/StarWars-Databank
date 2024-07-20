import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {!isHomePage && <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
