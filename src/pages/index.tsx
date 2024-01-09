import * as React from "react";
import type { PageProps } from "gatsby";

import Navbar from "../components/navbar";
import Divider from "../components/divider";
import Container from "../components/container";
import Features from "../components/sections/feature/feature";
import "../sass/basic.scss";
import Concept from "../components/sections/concept";
import Pricing from "../components/sections/price";
import Reason from "../components/sections/reason";
import Testimoni from "../components/sections/testimoni";
import RequestDemo from "../components/sections/requestdemo";
import Footer from "../components/footer";
import SmoothScroll from "../components/navbar/scrollsmoth";
import Section from "../components/sections/section";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <SmoothScroll />
      <Divider />
      <Section id="features">
        <Features />
      </Section>
      <Section id="concepts">
        <Concept />
      </Section>
      <Section id="pricing">
        <Pricing />
      </Section>
      <Reason />
      <Section id="testimonials">
        <Testimoni />
      </Section>
      <Section id="get-app">
        <RequestDemo />
      </Section>

      <Footer />
    </>
  );
};

export default IndexPage;
