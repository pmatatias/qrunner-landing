import React from "react";
import * as styles from "./styles.module.scss";

const PriceCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Standard</div>
      <p>
        For professionals and product<br></br>managers
      </p>
      <div className={styles.dollor}>
        <span className={styles.currency}>$</span>
        <span className={styles.amount}>13</span>
        <span className={styles.duration}>/month</span>
      </div>{" "}
    </div>
  );
};

export default PriceCard;
