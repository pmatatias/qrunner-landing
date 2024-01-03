import * as React from "react";
import type { PageProps } from "gatsby";

import Navbar from "../components/navbar";
import Divider from "../components/divider";
import Container from "../components/container";
import Features from "../components/sections/feature/feature";
import "../sass/basic.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Divider />
      <Features />
      <div className="utlizing">
        <div className="tsxt">
        <h3>
          By utilizing QRunner, we aim to reduce all repetitive tasks operated
          by engineers, so they can more focus on building the business core
          logic.
        </h3>
        </div>
      </div>
      <Container></Container>
    </>
  );
};

export default IndexPage;
