import React from 'react';
import styles from "./Header.module.css";
import { useLocation, useNavigate } from 'react-router-dom';
import GithubIcon from "../../image/github.webp";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // pageTab押下時
  const handleClickPageTab = (type: string) => {
    navigate(type);  
  }

  return (
    <header className={styles.header}>
      <a rel="noreferrer" target="_blank" href='https://github.com/dmat913'><img src={GithubIcon} alt='' /></a>
      <div className={styles.rightDiv}>
        <span className={location.pathname === "/portfolio" ? styles.active : ""} onClick={() => handleClickPageTab("/portfolio")}>About</span>
        <span className={location.pathname === "/portfolio/skills" ? styles.active : ""} onClick={() => handleClickPageTab("/portfolio/skills")}>Skills</span>
        <span>Works</span>
      </div>
    </header>
  )
}

export default Header