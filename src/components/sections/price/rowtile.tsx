import React from "react";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";
const RowTile = (props: any) => {
  return (
    <div className={styles.rowTile}>
      <div className={styles.iconIm}>
        {props.isAvailable ? (
          <StaticImage src="../../../images/check.svg" alt="cehck" />
        ) : (
          <StaticImage src="../../../images/close.svg" alt="close" />
        )}
      </div>

      <div
        className={`${styles.txt} ${
          props.isAvailable ? "" : styles.notavailable
        }`}
      >
        {props.name}
      </div>
    </div>
  );
};

export default RowTile;
