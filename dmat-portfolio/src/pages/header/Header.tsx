import React from 'react';
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>About</span>
      <span>Skills</span>
      <span>Works</span>
    </header>
  )
}

export default Header