import React from "react";
import * as styles from "./style.module.scss";
import Container from "../../container";
import ReasonCard from "./card";

const Reason = () => {
  return (
    <div className={styles.base}>
      <Container>
        <h3 className={styles.title}>Why QRunner?</h3>
        <div className={styles.reasons}>
          <ReasonCard
            image="security.png"
            title="Secure"
            desc="Running your own script locally will expose all of your secret keys to whoever runs the scripts."
          />
          <ReasonCard
            image="priority.png"
            title="Prioritization"
            desc="Let the engineers focus on the core business logic. Qrunner will reduce your budget for operational tasks."
          />
          <ReasonCard
            image="rocket.png"
            title="Fast & Responsive"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue ut eu nec sed et."
          />
        </div>
      </Container>
    </div>
  );
};

export default Reason;
