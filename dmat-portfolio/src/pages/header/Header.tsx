import React from 'react';
import styles from "./Header.module.css";
import { useLocation, useNavigate } from 'react-router-dom';
import GithubIcon from "../../image/github.webp";
import InstagramIcon from "../../image/instagram.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // pageTab押下時
  const handleClickPageTab = (type: string) => {
    navigate(type);  
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftDiv}>
        <a rel="noreferrer" target="_blank" href='https://github.com/dmat913'><img src={GithubIcon} alt='' /></a>
        <a rel="noreferrer" target="_blank" href='https://www.instagram.com/2ydk09s'><img src={InstagramIcon} alt='' /></a>
        </div>
      <div className={styles.rightDiv}>
        <span className={location.pathname === "/portfolio" ? styles.active : ""} onClick={() => handleClickPageTab("/portfolio")}>About</span>
        <span className={location.pathname === "/portfolio/skills" ? styles.active : ""} onClick={() => handleClickPageTab("/portfolio/skills")}>Skills</span>
        <span>Works</span>
      </div>
    </header>
  )
}

export default Header