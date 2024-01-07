import React from "react";
import * as styles from "./style.module.scss";
import CompanyLogo from "../../companylogo/company";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const TestiCard = (props: any) => {
    const firstChar = props.name ? props.name[0] : '';
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "testimonials" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 60, layout: CONSTRAINED)
          }
          relativePath
        }
      }
    }
  `);

  const imageData = data.allFile.nodes.find(
    (node: any) => node.relativePath === props.photo
  )?.childImageSharp?.gatsbyImageData;
  console.log(imageData);
  return (
    <div className={styles.card}>
      <div className={styles.decorTop}></div>
      <div className={styles.company}>
        <CompanyLogo imageName="qrunner-logo.png" sm={true} />
      </div>
      <blockquote>{props.desc}</blockquote>
      <div className={styles.user}>
        <div className={styles.photo}>
          {imageData ? (
            <GatsbyImage image={imageData} alt={props.photo} />
          ) : (
            <div>{firstChar}</div>
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.role}>{props.role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
