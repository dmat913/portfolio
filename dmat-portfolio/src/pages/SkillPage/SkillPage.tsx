import React from 'react';
import styles from "./SkillPage.module.css";
import JSIcon from "../../image/javascript.png";
import HTMLIcon from "../../image/html.png";
import CSSIcon from "../../image/css.png";
import ReactIcon from "../../image/react.png";
import GitIcon from "../../image/github.webp";
import SkillCard from '../../components/skillCard/SkillCard';
import { SkillCardInfo } from '../../types/skill';


/**
 * @returns Skill一覧
 */

// TODO: テキスト修正
const SkillCardInfoList: SkillCardInfo[] = [{
  type: "HTML",
  src: HTMLIcon,
  text: "テキストテキスト漢字山口大貴てすとこんにちは今日アウトラインにこだわり実装しています。",
  height: "302px",
},
{
  type: "CSS",
  src: CSSIcon,
  text: "テキストテキスト漢字山口大貴てすとこんにちは今日アウトラインにこだわり実装しています。",
  height: "302px",
  },
  {
    type: "JS",
    src: JSIcon,
    text: "テキストテキスト漢字山口大貴てすとこんにちは今日アウトラインにこだわり実装しています。",
    height: "302px",
  },
  {
    type: "REACT",
    src: ReactIcon,
    text: "テキストテキスト漢字山口大貴てすとこんにちは今日アウトラインにこだわり実装しています。",
    height: "302px",
  },{
    type: "GIT",
    src: GitIcon,
    text: "テキストテキスト漢字山口大貴てすとこんにちは今日アウトラインにこだわり実装しています。",
    height: "302px",
  }
]

function SkillPage() {
  return (
    <div className={styles.root}>
      {SkillCardInfoList.map((row,index) => (
        <SkillCard skillCardInfo={row} key={index} />
      ))}
    </div>
  )
}

export default SkillPage