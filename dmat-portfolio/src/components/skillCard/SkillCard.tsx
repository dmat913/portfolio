import React, { memo, useEffect, useRef } from 'react';
import styles from "./SkillCard.module.css";
import { SkillCardInfo } from '../../types/skill';

interface SkillCardProps {
  // 表示カード情報
  skillCardInfo: SkillCardInfo;
}

function SkillCard({skillCardInfo}: SkillCardProps) {
  // 対象DOM要素
  const targetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 対象要素取得
    const target: HTMLDivElement | null = targetRef.current;
    if (!target) return;

    // callback関数
    const callBack: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        // 画面内検知時の処理
        if (entry.isIntersecting) {
          target.style.height = skillCardInfo.height;
        } else {
          target.style.height = "214px";
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
      <span className={styles.star}>{skillCardInfo.star}</span>
      <span>{skillCardInfo.text}</span>
    </div>
  )
}

export default memo(SkillCard);