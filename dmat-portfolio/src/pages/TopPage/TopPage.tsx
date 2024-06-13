import React from 'react';
import styles from "./TopPage.module.css";
import GithubIcon from "../../image/icons8-github-64.png";


function TopPage() {
  return (
    <div>
      <span className={styles.title}>ポートフォリオ</span>
      <a rel="noreferrer" target='_blank' href='https://github.com/dmat913'>
        <img src={GithubIcon} alt='GithubIcon' />
      </a>
    </div>
  )
}

export default TopPage