import React from "react";

import * as styles from "./styles.module.scss";
import Container from "../../container";
import RowTile from "./rtile";
const Concept = () => {
  return (
    <div className={styles.base}>
      <Container>
        <h3 className={styles.title}>Qrunner's Concept</h3>
        <RowTile />
      </Container>
    </div>
  );
};

export default Concept;
