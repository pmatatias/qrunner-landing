import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";

interface CompanyLogoProps {
  imageName: string;
  sm?: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ imageName, sm = false }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 140, layout: CONSTRAINED)
          }
          relativePath
        }
      }
    }
  `);

  const imageData = data.allFile.nodes.find(
    (node: any) => node.relativePath === imageName
  )?.childImageSharp.gatsbyImageData;

  return (
    <div>
      {imageData ? (
        <GatsbyImage
          image={imageData}
          alt={imageName}
          className={`${styles.logoImage} ${sm ? styles.sm : ""}`}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CompanyLogo;
