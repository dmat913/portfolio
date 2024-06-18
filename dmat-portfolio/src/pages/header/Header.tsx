import React from 'react';
import styles from "./Header.module.css";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // pageTab押下時
  const handleClickPageTab = (type: string) => {
    navigate(type);  
  }

  return (
    <header className={styles.header}>
      <span onClick={() => handleClickPageTab("/")}>About</span>
      <span onClick={() => handleClickPageTab("/skills")}>Skills</span>
      <span>Works</span>
    </header>
  )
}

export default Header