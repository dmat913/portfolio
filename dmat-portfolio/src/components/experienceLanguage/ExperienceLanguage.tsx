import React, { memo, useState } from 'react';
import styles from "./ExperienceLanguage.module.css";
import ReactIcon from "../../image/react.png";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * @returns 経験言語紹介
 */

function ExperienceLanguage() {
  // 表裏表示判定
  const [isDisplayFront,setIsDisplayFront] = useState<boolean>(true)

  // 経歴言語紹介カード押下時
  const handleClickCard = () => {
    // 表Element
    const frontElement: HTMLElement | null = document.querySelector("#front");
    // 裏Element
    const backElement: HTMLElement | null = document.querySelector("#back");
    // null否定
    if (frontElement && backElement) {
      // 表表示時
      if (isDisplayFront) {
        frontElement.style.transform = "rotateY(-180deg)";
        backElement.style.transform = "rotateY(0)";
        setIsDisplayFront(false);
      // 裏表示時
      } else {
        frontElement.style.transform = "rotateY(0)";
        backElement.style.transform = "rotateY(-180deg)";
        setIsDisplayFront(true);
      }
    }
  }

  return (
    <div className={styles.root} onClick={handleClickCard}>
      <div className={styles.frontWrapper} id='front'>
        <div className={styles.reactIcon}>
          <img src={ReactIcon} alt='reactIcon' />
          <span>React: 2021年7月~</span>
        </div>
        <SyntaxHighlighter className={styles.codeWrapper} language='typescript' style={github}>{`import React from 'react';

function Portfolio() {
  return (
    <div>
      <h1>よろしくお願いします!</h1>
    </div>
  );
}

export default Portfolio;`}</SyntaxHighlighter>
      </div>
      <div className={styles.backWrapper} id='back'>testtest </div>
    </div>
  )
}

export default memo(ExperienceLanguage)