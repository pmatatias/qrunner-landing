import React from "react";
import * as styles from "./styles.module.scss";

const HamburgerMenu = (props:any) => {
    return (
        <div className={`${styles.hamburgerMenu} ${props.isExpand ? styles.open : ''}`}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      );
};

export default HamburgerMenu;
