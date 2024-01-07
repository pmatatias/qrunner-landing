import React from "react";
import * as styles from "./styles.module.scss";
import Container from "../../container";
import BaseButton from "../../basebutton";
import { StaticImage } from "gatsby-plugin-image";
import Divider from "../../divider";
import CompanyLogo from "./company";
const Features = () => {
  return (
    <div>
    <Container>
      <h1 className={styles.mainTitle}>
        The <span>very simple</span> way <br className={styles.breakLine}></br>{" "}
        to help your team
      </h1>
      <p className={styles.mainDesc}>
        Any repetitive operational tasks that require engineers' manual effort
        like running a self-made script, running{" "}
        <br className={styles.breakLine}></br>SQL queries, data patching for
        manual ops, can be turned into a self-serve tool that can be handed over
        to the <br className={styles.breakLine}></br>operational team, PMs, or
        anyone who doesn't have any experience with engineering.
      </p>
      <div className={styles.btnrow}>
        <BaseButton label="Start your free trial" />
        <a className={styles.btnprice}>
          <p>Plans and pricing</p>
          <StaticImage
            className={styles.icn}
            src="../../../images/icons/arrow_right.svg"
            alt="arrow-right"
          />
        </a>
      </div>
      <div className={styles.imgFeature}>
        <StaticImage src="../../../images/feature.png" alt="feature" />
      </div>
      <Divider />
      <div className={styles.trusted}>
        <h4>Trusted by high growth companies</h4>
        <ul>
          <li>
            <CompanyLogo imageName="qrunner-logo.png" />
          </li>
          <li>
            <CompanyLogo imageName="qrunner-logo.png" />
          </li>
          <li>
            <CompanyLogo imageName="qrunner-logo.png" />
          </li>
          <li>
            <CompanyLogo imageName="qrunner-logo.png" />
          </li>
          <li>
            <CompanyLogo imageName="qrunner-logo.png" />
          </li>
        </ul>
      </div>
      <Divider />
    </Container>
    <div className={styles.utlizing}>
        <div className={styles.tsxt}>
        <h3>
          By utilizing QRunner, we aim to reduce all repetitive tasks operated
          by engineers, so they can more focus on building the business core
          logic.
        </h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
