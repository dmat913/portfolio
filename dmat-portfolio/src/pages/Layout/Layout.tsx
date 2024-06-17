import React, { ReactNode } from 'react';
import styles from "./Layout.module.css";
import Header from '../header/Header';

/**
 * @returns children
 */

interface LayoutProps {
  children: ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className={styles.root}>
      <Header />
      {children}
    </div>
  )
}

export default Layout