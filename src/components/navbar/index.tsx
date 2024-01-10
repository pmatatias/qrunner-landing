import React, { useState } from "react";
import Container from "../container";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
import BaseButton from "../basebutton";
import HamburgerMenu from "../hamburger";

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleToogle = () => {
    setIsExpand(!isExpand);
    if (!isExpand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Reset to default
    }
  };

  const handleMenuItemClick = () => {
    setIsExpand(!isExpand);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Container>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <a href="/">
                <StaticImage
                  src="../../images/qrunner-logo.png"
                  style={{
                    // inline style to avoid graphql auto resize image
                    minWidth: "100px",
                    maxWidth: "195px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  alt="Qrunner logo"
                />
              </a>
            </div>
            <div className={styles.menu}>
              <ul className={styles.menuItems}>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#get-app">Get App</a>
                </li>
              </ul>
            </div>
            <div className={styles.btnTry}>
              {" "}
              <BaseButton label="Try Now" />
            </div>
            <div className={styles.iconMobile} onClick={handleToogle}>
              <HamburgerMenu isExpand={isExpand} />
            </div>
          </div>

          <div
            className={`${styles.mobileMenu}  ${isExpand ? "" : styles.hidde}`}
          >
            <li>
              <a href="#features" onClick={handleMenuItemClick}>
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={handleMenuItemClick}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleMenuItemClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#get-app" onClick={handleMenuItemClick}>
                Get App
              </a>
            </li>

            <div className={styles.btnTry2} onClick={handleMenuItemClick}>
              <BaseButton label="Try Now" />
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
