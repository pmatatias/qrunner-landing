import React from "react";

import * as styles from "./styles.module.scss";
import Container from "../../container";
import { StaticImage } from "gatsby-plugin-image";
const Concept = () => {
  return (
    <div >
      <Container>
    <div className={styles.base}>

        <h3 className={styles.title}>Qrunner's Concept</h3>

        <div className={styles.tile}>
          <div className={styles.tileDesc}>
            <h4>Create Own Script</h4>
            <div className={styles.tileSubdesc}>
              The Engineers will create their own script and store it in their
              own Github repositories.
            </div>
          </div>
          <div className={styles.tileImg}>
            <StaticImage
              src="../../../images/concept1.png"
              alt="create own script"
            />
          </div>
        </div>

        <div className={`${styles.tile} ${styles.tileReverse}`}>
          <div className={styles.tileDesc}>
            <h4>It's time for QRunner to help you</h4>
            <div className={styles.tileSubdesc}>
              QRunner will pull the scripts from the specified repositories.
            </div>
          </div>
          <div className={styles.tileImg}>
            <StaticImage
              src="../../../images/concept2.png"
              alt="It's time for QRunner 
              to help you"
            />
          </div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileDesc}>
            <h4>QRunner render the script</h4>
            <div className={styles.tileSubdesc}>
              QRunner will render the script in QRunner platform
              <ul>
                <li>
                  {" "}
                  QRunner display all the scripts on QRunner dashboard as a
                  runnable command{" "}
                </li>
                <li>
                  QRunner allows script execution through messaging platforms{" "}
                  <span>eg. Slack</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.tileImg}>
            <StaticImage
              src="../../../images/concept3.png"
              alt="create own script"
            />
          </div>
        </div>

        <div className={`${styles.tile} ${styles.tileReverse}`}>
          <div className={styles.tileDesc}>
            <h4>Now you all can run the script</h4>
            <div className={styles.tileSubdesc}>
              Non Engineers now can run the script from all integrated channel
              <ul>
                <li>
                  <span> Qrunner's</span>
                </li>
                <li>
                  <span> Dashboard</span>
                </li>
                <li>
                  <span> Slack</span>
                </li>
                <li>
                  <span> Discord</span>
                </li>
                <li>
                  <span> Telegram</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.tileImg}>
            <StaticImage
              src="../../../images/concept4.png"
              alt="Now you all can run the script"
            />
          </div>
    </div>
        </div>
      </Container>
    </div>
  );
};

export default Concept;
