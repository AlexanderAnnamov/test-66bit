import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { newsApi } from "../../redux/api/news/news";

import { ReactComponent as Theme } from "../../assets/img/theme.svg";
import { ReactComponent as News } from "../../assets/img/news.svg";

import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const resetCacheNews = () => {
    dispatch(newsApi.util.resetApiState());
  };



  return (
    <nav className={styles.navigation + ' ' + styles.hide}>
      <Link to="/" onClick={resetCacheNews}>
        <News className={styles.icon} />
      </Link>
      <Link to="/themes">
        <Theme className={styles.icon} />
      </Link>
    </nav>
  );
};

export default Navbar;
