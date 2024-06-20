import React from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import GithubIcon from "../../image/github.webp";
import InstagramIcon from "../../image/instagram.png";
import Typography from "../../common/components/Typography";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // pageTab押下時
  const handleClickPageTab = (type: string) => {
    navigate(type);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftDiv}>
        <a rel="noreferrer" target="_blank" href="https://github.com/dmat913">
          <img src={GithubIcon} alt="" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/2ydk09s"
        >
          <img src={InstagramIcon} alt="" />
        </a>
      </div>
      <div className={styles.rightDiv}>
        <Typography
          color="#800020"
          fontType="bold"
          className={location.pathname === "/portfolio" ? styles.active : ""}
          onClick={() => handleClickPageTab("/portfolio")}
        >
          About
        </Typography>
        <Typography
          color="#800020"
          fontType="bold"
          className={
            location.pathname === "/portfolio/skills" ? styles.active : ""
          }
          onClick={() => handleClickPageTab("/portfolio/skills")}
        >
          Skills
        </Typography>
        <Typography
          fontType="bold"
          color="#800020"
          className={
            location.pathname === "/portfolio/works" ? styles.active : ""
          }
          onClick={() => handleClickPageTab("/portfolio/works")}
        >
          Works
        </Typography>
      </div>
    </header>
  );
}

export default Header;
