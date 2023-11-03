import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Navbar from '../components/nav-bar';

import styles from './main-layots.module.css'

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.footer}>
      <Navbar/>
      </footer>
    </div>
  );
};

export default MainLayout;