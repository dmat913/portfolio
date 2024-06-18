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
      <div>
        <span>山口大貴</span>
        <span>1998年9月13日 25歳</span>
        <div>
          <span>大学</span><span>東京国際大学</span>
        </div>
        <div>
          <span>出身</span><span>埼玉県</span>
        </div>
      </div>
    </div>
  )
}

export default TopPage