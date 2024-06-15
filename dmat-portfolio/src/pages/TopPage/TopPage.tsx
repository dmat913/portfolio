import React from 'react';
import styles from "./TopPage.module.css";
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ExperienceLanguage from '../../components/experienceLanguage/ExperienceLanguage';
// import GithubIcon from "../../image/icons8-github-64.png";
// import ProfileCard from '../../components/ProfileCard/ProfileCard';


function TopPage() {
  return (
    <div className={styles.root}>
      {/* <a rel="noreferrer" target='_blank' href='https://github.com/dmat913'>
        <img src={GithubIcon} alt='GithubIcon' />
      </a> */}
      {/* 自己紹介カード */}
      <ProfileCard />
      {/* 経験言語 */}
      <ExperienceLanguage />
    </div>
  )
}

export default TopPage