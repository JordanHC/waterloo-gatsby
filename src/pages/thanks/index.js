import React from "react";
import { graphql } from "gatsby";
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
        heading={data.markdownRemark.frontmatter.heading}
        subheading={data.markdownRemark.frontmatter.subheading}
        image={data.markdownRemark.frontmatter.image}
      />
    </Layout>
  );
};

export const query = graphql`
  query ThanksQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "thanks" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        title
        heading
        subheading
      }
    }
  }
`;

export default Thanks;
