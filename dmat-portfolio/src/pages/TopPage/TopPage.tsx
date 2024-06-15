import React from 'react';
import styles from "./TopPage.module.css";
import GithubIcon from "../../image/icons8-github-64.png";
import ProfileCard from '../../components/ProfileCard';


function TopPage() {
  return (
    <div className={styles.root}>
      <span className={styles.title}>ポートフォリオ</span>
      <a rel="noreferrer" target='_blank' href='https://github.com/dmat913'>
        <img src={GithubIcon} alt='GithubIcon' />
      </a>
      <ProfileCard />
    </div>
  )
}

export default TopPage