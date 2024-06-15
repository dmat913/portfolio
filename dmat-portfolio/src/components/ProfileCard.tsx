import React from 'react';
import styles from "./ProfileCard.module.css";
import ProfileIcon from "../image/profile.jpeg";

/**
 * @returns プロフィール紹介
 */

function ProfileCard() {
  return (
    <div className={styles.root}>
      <img src={ProfileIcon} alt='プロフィール写真' className={styles.profileIcon} />
      <span className={styles.name}>
        山口大貴
      </span>
    </div>
  )
}

export default ProfileCard