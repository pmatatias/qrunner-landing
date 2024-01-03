import * as React from "react";
import type { PageProps } from "gatsby";

import Navbar from "../components/navbar";
import Divider from "../components/divider";
import Container from "../components/container";
import Features from "../components/sections/feature/feature";
import "../sass/basic.scss";
import Concept from "../components/sections/concept";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Divider />
      <Features />
      <Concept />
      <Container></Container>
    </>
  );
};

export default IndexPage;
