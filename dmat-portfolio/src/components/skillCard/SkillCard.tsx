import React, { memo, useEffect, useRef, useState } from 'react';
import styles from "./SkillCard.module.css";
import { SkillCardInfo } from '../../types/skill';
import Typography from '../../common/components/Typography';

interface SkillCardProps {
  // 表示カード情報
  skillCardInfo: SkillCardInfo;
}

function SkillCard({skillCardInfo}: SkillCardProps) {
  // 対象DOM要素
  const targetRef = useRef<HTMLDivElement>(null);
  // 
  const [isOpenCard,setIsOpenCard] = useState<boolean>(false)
  
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
          target.style.transform = "scale(1)";
          setIsOpenCard(true)
        } else {
          target.style.transform = "scale(0)";
        }
      });
    };
    // インスタンス生成
    const io = new IntersectionObserver(callBack);
    // 監視開始
    if (!isOpenCard) io.observe(target);
    return () => {
      io.unobserve(target);
    }
    // eslint-disable-next-line
  }, [isOpenCard])
  
  return (
    <div ref={targetRef} className={styles.root}>
      <img src={skillCardInfo.src} alt='HTMLIcon' />
      <Typography size={20}>{skillCardInfo.star}</Typography>
      <Typography size={14}>{skillCardInfo.text}</Typography>
    </div>
  )
}

export default memo(SkillCard);