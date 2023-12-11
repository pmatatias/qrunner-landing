import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "../section";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as styles from "./styles.module.scss";
import BaseButton from "../basebutton";

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

  return (
    <>
      <Section>
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
        </div>
      </Section>
    </>
  );
};

export default Navbar;
