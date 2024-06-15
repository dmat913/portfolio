import React, { memo } from 'react';
import styles from "./ExperienceLanguage.module.css";
import ReactIcon from "../../image/react.png";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * @returns 経験言語紹介
 */

function ExperienceLanguage() {

  return (
    <div className={styles.root}>
      <div className={styles.reactWrapper}>
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
    </div>
  )
}

export default memo(ExperienceLanguage)