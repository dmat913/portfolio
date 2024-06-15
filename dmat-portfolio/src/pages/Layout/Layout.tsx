import React, { ReactNode } from 'react';
import styles from "./Layout.module.css";

/**
 * @returns children
 */

interface LayoutProps {
  children: ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

export default Layout