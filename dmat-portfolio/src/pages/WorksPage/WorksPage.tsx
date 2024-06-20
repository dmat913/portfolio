import React, { memo } from "react";
import SlideMovieMakerThumbnail from "../../image/SlideMovieMaker/SlideMovieMaker.png";
import UploadPage from "../../image/SlideMovieMaker/uploadPage.png";
import EditPage from "../../image/SlideMovieMaker/editPPT.png";
import styles from "./WorksPage.module.css";
import Typography from "../../common/components/Typography";
import TitleImg from "../../image/SlideMovieMaker/title.png";
import DisplayTimeImg from "../../image/SlideMovieMaker/displayTime.png";
import InitTextImg from "../../image/SlideMovieMaker/initText.png";
import HiddenSlideImg from "../../image/SlideMovieMaker/hiddenSlide.png";
import EditTextImg from "../../image/SlideMovieMaker/editText.png";
import SettingsImg from "../../image/SlideMovieMaker/settings.png";
import TypescriptIcon from "../../image/typescript.png";
import ReactIcon from "../../image/react.png";
import RecoilIcon from "../../image/recoilIcon.png";
import ReduxIcon from "../../image/reduxIcon.png";
import VSCodeIcon from "../../image/vsCode.jpeg";
import GithubIcon from "../../image/github.webp";
import CreateMp4Img from "../../image/SlideMovieMaker/createMP4.png";
import CompletedMp4 from "../../image/SlideMovieMaker/completedMp4.png";

function WorksPage() {
  return (
    <div className={styles.root}>
      <Typography size={20} fontType="bold">
        Slide Movie Maker
      </Typography>
      <Typography size={14}>
        PPTから動画を生成するためのWEBアプリケーション
      </Typography>
      <img
        src={SlideMovieMakerThumbnail}
        alt="開発実績1"
        className={styles.img}
      />
      <div className={styles.contentsWrapper}>
        <div className={styles.period}>
          <Typography fontType="bold">開発期間</Typography>
          <Typography size={14}>version1: 2023年2月〜3月</Typography>
          <Typography size={14}>version2: 2023年9月</Typography>
          <Typography size={14}>version3: 2023年11月〜12月</Typography>
        </div>
        <div className={styles.skillsWrapper}>
          <Typography fontType="bold">使用技術</Typography>
          <div className={styles.skillsIconWrapper}>
            <img
              src={TypescriptIcon}
              alt="TypescriptImg"
              className={styles.skillsIcon}
            />
            <img src={ReactIcon} alt="ReactImg" className={styles.skillsIcon} />
            <img
              src={RecoilIcon}
              alt="RecoilImg"
              className={styles.skillsIcon}
            />
            <img src={ReduxIcon} alt="ReduxImg" className={styles.skillsIcon} />
            <img
              src={GithubIcon}
              alt="GithubImg"
              className={styles.skillsIcon}
            />
            <img
              src={VSCodeIcon}
              alt="VSCodeImg"
              className={styles.skillsIcon}
            />
          </div>
        </div>
        <div className={styles.contents}>
          <Typography fontType="bold">画面説明</Typography>
          <div className={styles.step1}>
            <Typography size={14} fontType="bold">
              STEP1: PPTアップロード
            </Typography>
            <img src={UploadPage} alt="" className={styles.img} />
            <img src={EditPage} alt="" className={styles.img} />
          </div>
          <div className={styles.step2}>
            <Typography size={14} fontType="bold">
              STEP2: 編集
            </Typography>
            <div className={styles.step2}>
              <div className={styles.explanation}>
                <Typography size={12}>動画名</Typography>
                <img
                  src={TitleImg}
                  alt="タイトル設定Img"
                  className={styles.img}
                />
              </div>
              <div className={styles.explanation}>
                <Typography size={12}>スライドの表示時間</Typography>
                <img
                  src={DisplayTimeImg}
                  alt="スライドの表示時間Img"
                  className={styles.img}
                />
              </div>
              <div className={styles.explanation}>
                <Typography size={12}>テキスト初期化</Typography>
                <img
                  src={InitTextImg}
                  alt="テキスト初期化Img"
                  className={styles.img}
                />
              </div>
              <div className={styles.explanation}>
                <Typography size={12}>スライド非表示</Typography>
                <img
                  src={HiddenSlideImg}
                  alt="スライド非表示Img"
                  className={styles.img}
                />
              </div>
              <div className={styles.explanation}>
                <Typography size={12}>音声字幕編集</Typography>
                <img
                  src={EditTextImg}
                  alt="音声字幕編集Img"
                  className={styles.img}
                />
              </div>
              <div className={styles.explanation}>
                <Typography size={12}>動画設定</Typography>
                <img src={SettingsImg} alt="設定Img" className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.step3}>
            <Typography size={14} fontType="bold">
              STEP3 動画生成
            </Typography>
            <img src={CreateMp4Img} alt="動画生成Img" className={styles.img} />
            <img src={CompletedMp4} alt="動画生成完了" className={styles.img} />
          </div>
        </div>
        <div className={styles.features}>
          <Typography fontType="bold">こだわり・感想</Typography>
          <Typography size={12}>
            コンポーネントを分割し、1つのファイルを300,400行以内で抑えました。
            <br />
            コメントを多く残し、誰でも修正しやすいよう意識しました。
            <br />
            フロントエンドの作業は全て1人で開発したので、とても思い入れがあります。
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default memo(WorksPage);
