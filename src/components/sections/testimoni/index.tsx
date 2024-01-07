import React from "react";
import * as styles from "./style.module.scss";
import Container from "../../container";
import TestiCard from "./card";

const Testimoni = () => {
  return (
    <div className={styles.base}>
      <Container>
        <h3 className={styles.title}>People are talking</h3>
        <div className={styles.testimonials}>
          <TestiCard
            name="JAYLON FRANCI"
            role="VP of Tech"
            photo="testimonials/profile1.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna integer risus, praese habitasse sit sit duis ullamcorp. Vel ipsum scelerisque urna."
          />
          <TestiCard
            name="JAYLON FRANCI"
            role="VP of Tech"
            photo="testimonials/profile1.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna integer risus, praese habitasse sit sit duis ullamcorp. Vel ipsum scelerisque urna."
          />
          <TestiCard
            photo="testimonials/profile1.png"
            name="JAYLON FRANCI"
            role="VP of Tech"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna integer risus, praese habitasse sit sit duis ullamcorp. Vel ipsum scelerisque urna."
          />
        </div>
      </Container>
    </div>
  );
};

export default Testimoni;
