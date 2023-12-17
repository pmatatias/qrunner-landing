import * as React from "react";
import type { PageProps } from "gatsby";

import Navbar from "../components/navbar";
import Divider from "../components/divider";
import Container from "../components/container";
import "../sass/basic.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Divider />
      <Container>
        <Divider marginTop={100} />
      </Container>
    </>
  );
};

export default IndexPage;
