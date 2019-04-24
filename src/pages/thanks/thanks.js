import React from "react";
import Layout from "../../components/Layout";
import LiftOff from "../../components/ui/LiftOff";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import TitleWrapper from "../../components/ui/TitleWrapper";
import Banner from "../../components/ui/Banner";
import Slant from "../../components/ui/Slant";

export const ThanksTemplate = ({ heading, subheading, image }) => (
  <>
    <Banner
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <Container>
        <TitleWrapper>
          <Title noMargin>{heading}</Title>
        </TitleWrapper>
      </Container>
      <Slant />
    </Banner>
    <LiftOff>
      <Container>
        <p>{subheading}</p>
      </Container>
    </LiftOff>
  </>
);

const Thanks = ({ data }) => {
  return (
    <Layout>
      <ThanksTemplate
        heading={data.allMarkdownRemark.edges[0].node.frontmatter.heading}
        subheading={data.allMarkdownRemark.edges[0].node.frontmatter.subheading}
        image={data.allMarkdownRemark.edges[0].node.frontmatter.image}
      />
    </Layout>
  );
};

export default Thanks;
