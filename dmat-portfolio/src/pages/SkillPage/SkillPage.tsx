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
  text: "アウトラインにこだわり実装する事を意識しています。CSSでスタイリングがしやすいよう適切に要素を配置する事が大切だと思っています。",
  height: "330px",
},
{
  type: "CSS",
  src: CSSIcon,
  text: "基本的なスタイリングには自信があります。どのページでも表示が崩れにくくなる事を意識して実装しています。",
  height: "302px",
  },
  {
    type: "JS",
    src: JSIcon,
    text: "基本的な構文は理解する事が出来ると思います。バニラjavascriptでの開発経験はありません。",
    height: "302px",
  },
  {
    type: "REACT",
    src: ReactIcon,
    text: "3年間開発経験があります。コメントをたくさん残すなど他の人でも読みやすいコードを意識して実装しています。複数のシステム開発を1人で行った経験があります。",
    height: "352px",
  },{
    type: "GIT",
    src: GitIcon,
    text: "バージョン管理のツールとしてはGITを使用していました。基本的なコマンドやGITの仕組みなどは理解していると思います。レビュー経験もあります。",
    height: "352px",
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