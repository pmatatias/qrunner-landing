import React from "react";
import * as styles from "./styles.module.scss";

const Container = (props: any) => {
  return <div className={styles.section}>{props.children}</div>;
};

export default Container;
