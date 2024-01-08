import React from "react";
import * as styles from "./styles.module.scss";
import Container from "../container";
import { StaticImage } from "gatsby-plugin-image";
import Divider from "../divider";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.inbase}>
          <div className={styles.logo}>
            <StaticImage src="../../images/logo-bw.png" alt="logo" />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.group}>
              <div className={styles.title}>PRODUCTS</div>
              <a href="">Why Qrunner?</a>
              <a href="">Product Updates</a>
            </div>
            <div className={styles.group}>
              <div className={styles.title}>COMPANY</div>
              <a href="">Our Story</a>
              <a href="">Newsroom</a>
              <a href="">Careers</a>
            </div>
            <div className={styles.group}>
              <div className={styles.title}>COMMUNITY</div>
              <a href="">About Us</a>
              <a href="">Developers</a>
              <a href="">Events</a>
              <a href="">Forum</a>
            </div>
            <div className={styles.group}>
              <div className={styles.title}>SUPPORT</div>
              <a href="">Help Center</a>
              <a href="">Contact Us</a>
              <a href="">Cookie Policy</a>
              <a href="">Manage Cookies</a>
              <a href="">Privacy & Terms</a>
              <a href="">Sitemap</a>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <a href="">
            <StaticImage src="../../images/icons/insta.svg" alt="instagram" />
          </a>
          <a href="">
            <StaticImage src="../../images/icons/twitter.svg" alt="twitter" />
          </a>{" "}
          <a href="">
            <StaticImage src="../../images/icons/facebook.svg" alt="facbook" />
          </a>
        </div>
      </Container>
      <Divider color="#FFFFFF"/>
      <div className={styles.copyRight}>© 2021 QRunner Asia</div>
    </div>
  );
};

export default Footer;
