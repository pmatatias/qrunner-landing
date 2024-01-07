import * as React from "react";
import type { PageProps } from "gatsby";

import Navbar from "../components/navbar";
import Divider from "../components/divider";
import Container from "../components/container";
import Features from "../components/sections/feature/feature";
import "../sass/basic.scss";
import Concept from "../components/sections/concept";
import Pricing from "../components/sections/price";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Divider />
      <Features />
      <Concept />
      <Pricing />
      <Container></Container>
    </>
  );
};

export default IndexPage;
