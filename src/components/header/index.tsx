import { useLocation } from 'react-router-dom';

import styles from './header.module.css'

const Header = () => {

  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{location.pathname === '/' ? 'News' : 'Theme'}</h1>
    </header>
  )
}

export default Header;
