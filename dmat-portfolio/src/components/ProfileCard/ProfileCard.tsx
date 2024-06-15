import React from 'react';
import styles from "./ProfileCard.module.css";
import ProfileIcon from "../../image/profile.jpeg";

/**
 * @returns プロフィール紹介
 */

function ProfileCard() {
  return (
    <div className={styles.root}>
      <img src={ProfileIcon} alt='プロフィール写真' className={styles.profileIcon} />
      <div className={styles.profileWrapper}>
        <span className={styles.text}>
          山口大貴
        </span >
        <span className={styles.text}>
          1998年9月13日
        </span >
      </div>
    </div>
  )
}

export default ProfileCard