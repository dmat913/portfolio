import React from 'react';
import styles from "./TopPage.module.css";
// import GithubIcon from "../../image/icons8-github-64.png";
// import ProfileCard from '../../components/ProfileCard/ProfileCard';


function TopPage() {
  return (
    <div className={styles.root}>
      {/* 自己紹介カード */}
      {/* <ProfileCard /> */}
      {/* 経験言語 */}
      {/* <ExperienceLanguage /> */}
      <span>山口大貴</span>
    </div>
  )
}

export default TopPage