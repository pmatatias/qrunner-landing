import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { logoImage } from "./styles.module.scss";

interface CompanyLogoProps {
  imageName: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ imageName }) => {
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
        <GatsbyImage image={imageData} alt={imageName} className={logoImage} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CompanyLogo;
