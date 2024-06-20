import React from "react";
import styles from "./TopPage.module.css";
import ProfileIcon from "../../image/profile.jpeg";
import Typography from "../../common/components/Typography";
import IPAIcon from "../../image/IPA.jpg";
import TeacherIcon from "../../image/teacher.webp"

function TopPage() {
  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <img src={ProfileIcon} alt="プロフィール画像" />
        <div className={styles.contents}>
          <Typography size={20} fontType="bold">
            山口大貴
          </Typography>
          <Typography size={14}>25歳</Typography>
          <Typography size={14}>フロントエンドエンジニア</Typography>
        </div>
      </section>
      <section className={styles.wrapper}>
        <Typography size={20} fontType="bold">
          経歴
        </Typography>
        <div className={styles.contents}>
          <Typography size={14}>
            東京国際大学
            <br />
            2017年04月 〜 2021年03月
          </Typography>
          <Typography size={14}>
            株式会社パクテラ・テクノロジー・ジャパン
            <br />
            2021年04月 〜
          </Typography>
        </div>
      </section>
      <section className={styles.wrapper}>
        <Typography size={20} fontType="bold">
          保有資格
        </Typography>
        <div className={styles.contents}>
          <div className={styles.skillWrapper}>
            <div className={styles.skillName}>
              <img src={IPAIcon} alt="IPAIcon" className={styles.skillIcon} />
              <Typography size={14}>基本情報技術者試験</Typography>
            </div>
            <Typography size={14}>2024年04月</Typography>
          </div>
          <div className={styles.skillWrapper}>
            <div className={styles.skillName}>
              <img src={IPAIcon} alt="IPAIcon" className={styles.skillIcon} />
              <Typography size={14}>情報セキュリティマネジメント</Typography>
            </div>
            <Typography size={14}>2021年07月</Typography>
          </div>
          <div className={styles.skillWrapper}>
            <div className={styles.skillName}>
              <img src={TeacherIcon} alt="文部科学省icon" className={styles.skillIcon} />
              <Typography size={14}>中学,高校教諭一種免許状(保健体育)</Typography>
            </div>
            <Typography size={14}>2021年03月</Typography>
          </div>
        </div>
      </section>
      <section className={styles.wrapper}>
        <Typography size={20} fontType="bold">
          趣味
        </Typography>
        <div className={styles.contents}>
          <Typography size={14}>
            サッカー,サウナ
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default TopPage;
