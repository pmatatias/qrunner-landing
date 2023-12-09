import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "../section";
import * as styles from "./styles.module.scss";
const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Section>
        <div className={styles.navbar}>
          <div className={styles.logo}>qrunner</div>
          <div  className={styles.menu}>
            <ul  className={styles.menuItems} >
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </div>
          <div className={styles.btnTry}> btn </div>
        </div>
      </Section>
    </>
  );
};

export default Navbar;
