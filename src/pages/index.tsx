import * as React from "react";
import type { PageProps } from "gatsby";

import Navbar from "../components/navbar";
import Divider from "../components/divider";
import Section from "../components/section";
import "../sass/basic.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Divider />
      <Section>
        <Divider marginTop={100} />
      </Section>
    </>
  );
};

export default IndexPage;
