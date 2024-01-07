import React from "react";
import * as styles from "./style.module.scss";
import BaseButton from "../../basebutton";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ReasonCard = (props: { image: string; title: string; desc: string }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "reasons" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 250, layout: CONSTRAINED)
          }
          relativePath
        }
      }
    }
  `);

  const imageData = data.allFile.nodes.find(
    (node: any) => node.relativePath === props.image
  )?.childImageSharp?.gatsbyImageData;

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        {imageData ? (
          <GatsbyImage image={imageData} alt={props.image} />
        ) : (
          <div>fff</div>
        )}
      </div>
      <div className={styles.txt}>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
      <BaseButton label="Check it out" isSecondary={true} />
    </div>
  );
};

export default ReasonCard;
