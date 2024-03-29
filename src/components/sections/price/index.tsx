import React from "react";
import * as styles from "./styles.module.scss";
import Container from "../../container";
import PriceCard from "./pricecard";

const Pricing = () => {
  return (
    <div className={styles.base}>
      <Container>
        <h3 className={styles.title}>
          QRunner helps teams of all sizes build better collaboration
        </h3>
        <div className={styles.pricelist}>
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
