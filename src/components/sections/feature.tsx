import React from "react";
import * as styles from "./styles.module.scss";
import Container from "../container";
import BaseButton from "../basebutton";
import { StaticImage } from "gatsby-plugin-image";
import Divider from "../divider";
const Features = (props: any) => {
  return (
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
            src="../../images/arrow_right.svg"
            alt="arrow-right"
          />
        </a>
      </div>
      <div className={styles.imgFeature}>
        <StaticImage src="../../images/feature.png" alt="feature" />
      </div>
      <Divider />
      <div>
        <h4>Trusted by high growth companies</h4>
      </div>
      <Divider />
    </Container>
  );
};

export default Features;
