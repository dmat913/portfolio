import React, { memo, useEffect, useRef, useState } from 'react';
import styles from "./SkillCard.module.css";
import { SkillCardInfo } from '../../types/skill';

interface SkillCardProps {
  // 表示カード情報
  skillCardInfo: SkillCardInfo;
}

function SkillCard({skillCardInfo}: SkillCardProps) {
  // 対象DOM要素
  const targetRef = useRef<HTMLDivElement>(null);

  // テキスト欄表示flag
  const [isDisplayText, setIsDisplayText] = useState<boolean>(false);
  
  useEffect(() => {
    // 対象要素取得
    const target: HTMLDivElement | null = targetRef.current;
    if (!target) return;

    // callback関数
    const callBack: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        // 画面内検知時の処理
        if (entry.isIntersecting) {
          console.log("画面内", skillCardInfo.type);
          setIsDisplayText(true);
          target.style.height = skillCardInfo.height;
          target.style.transform = "scale(1)";
          // TODO: 画面外検知時の処理
        } else {
          console.log("画面外", skillCardInfo.type);
          setIsDisplayText(false);
          target.style.height = "214px";
          target.style.transform = "scale(0.1)";
        }
      });
    };
    // インスタンス生成
    const io = new IntersectionObserver(callBack);
    // 監視開始
    io.observe(target);
    return () => {
      io.unobserve(target);
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div ref={targetRef} className={styles.root}>
      <img src={skillCardInfo.src} alt='HTMLIcon' />
      {isDisplayText && <span>{skillCardInfo.text}</span>}
    </div>
  )
}

export default memo(SkillCard);