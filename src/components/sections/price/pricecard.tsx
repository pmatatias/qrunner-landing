import React from "react";
import * as styles from "./styles.module.scss";
import RowTile from "./rowtile";
import BaseButton from "../../basebutton";

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
      <div className={styles.feats}>
        <RowTile
          isAvailable={true}
          name="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <RowTile isAvailable={true} name="Consectetur adipiscing elit" />
        <RowTile isAvailable={false} name="Sem enim nibh cras ut enim" />
        <RowTile isAvailable={false} name="Arcu gravida enim elementum" />
      </div>
      <div className={styles.btn}>
        <BaseButton label="View More" isFullW={true} />
      </div>
    </div>
  );
};

export default PriceCard;
