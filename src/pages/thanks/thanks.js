import React from "react";
import Layout from "../../components/Layout";
import LiftOff from "../../components/ui/LiftOff";
import Container from "../../components/ui/Container";

export const ThanksTemplate = ({ heading, subheading }) => (
  <Layout>
    <LiftOff>
      <Container>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </Container>
    </LiftOff>
  </Layout>
);

const Thanks = ({ data }) => {
  console.log(data);
  return (
    <ThanksTemplate
      heading={data.allMarkdownRemark.edges[0].node.frontmatter.heading}
      subheading={data.allMarkdownRemark.edges[0].node.frontmatter.subheading}
    />
  );
};

export default Thanks;
