import React from "react";
import * as styles from "./styles.module.scss";
import BaseButton from "../../basebutton";
import Container from "../../container";

const RequestDemo = () => {
  return (
    <div className={styles.base}>
      <Container>
        <div className={styles.inBase}>
          <h3 className={styles.title}>
            If you're interested in a demo and running some of your internal use
            cases, where can we contact you?
          </h3>
          <div className={styles.email}>
            <input placeholder="Your work email"/>
          </div>
          <div className={styles.btn}>
            <BaseButton label="Get a Demo" isSecondary={true} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RequestDemo;
