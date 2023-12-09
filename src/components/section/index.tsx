import React from "react";
import * as styles from "./styles.module.scss";

const Section = (props: any) => {
  return <div className={styles.section}>{props.children}</div>;
};

export default Section;
