import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "../section";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as styles from "./styles.module.scss";
import BaseButton from "../basebutton";
import HamburgerMenu from "../hamburger";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "qrunner-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 195) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isExpand, setIsExpand] = useState(false);

  const handleToogle = () => {
    setIsExpand(!isExpand);
  };

  return (
    <>
      <Section>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <Link to="/">
                <Img
                  fluid={data.myImage.childImageSharp.fluid}
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
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Get App</li>
              </ul>
            </div>
            <div className={styles.btnTry}>
              {" "}
              <BaseButton label="Try Now" />
            </div>
            <div className={styles.iconMobile} onClick={handleToogle}>
              {/* {isExpand ? "X" : "H"}
               */}
              <HamburgerMenu isExpand={isExpand} />
            </div>
          </div>

          <div
            className={`${styles.mobileMenu}  ${isExpand ? "" : styles.hidde}`}
          >
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Get App</Link>
            </li>
            <div className={styles.btnTry}>
              {" "}
              <BaseButton label="Try Now" />
            </div>
          </div>
        </nav>
      </Section>
    </>
  );
};

export default Navbar;
