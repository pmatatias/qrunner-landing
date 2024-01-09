import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";
import Container from "../container";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
import BaseButton from "../basebutton";
import HamburgerMenu from "../hamburger";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
  };

  animateScroll.scrollToBottom(options);

  // const data = useStaticQuery(graphql`
  //   query {
  //     myImage: file(relativePath: { eq: "qrunner-logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 195) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  const [isExpand, setIsExpand] = useState(false);

  const handleToogle = () => {
    setIsExpand(!isExpand);
  };

  return (
    <>
      <Container>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <Link to="/">
                <StaticImage
                  // fluid={data.myImage.childImageSharp.fluid}
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
              </Link>
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

            <div className={styles.btnTry2}>
              {" "}
              <BaseButton label="Try Now" />
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
