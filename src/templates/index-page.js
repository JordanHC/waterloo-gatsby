import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import CallToActions from "../components/CallToActions";
import LatestNewsHome from "../components/LatestNewsHome";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Slant from "../components/ui/Slant";
import LiftOff from "../components/ui/LiftOff";

const Banner = styled.section`
  position: relative;
  color: ${props => props.theme.white};
  overflow: hidden;
`;

const BannerImage = styled.div`
  padding-top: 40px;
  padding-bottom: 160px;
  background-size: cover;
  background-position: 50%;
  background-color: ${props => props.theme.darkColor};
  @media (min-width: 768px) {
    padding-top: 60px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    min-height: 550px;
  }

  @media (min-width: 1380px) {
    padding-top: 150px;
    min-height: 800px;
  }
`;

const BannerTextWrap = styled.div`
  position: relative;
  z-index: 100;
  @media (max-width: 992px) {
    max-width: 320px;
  }
  @media (min-width: 992px) {
    max-width: 40%;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 15px;
  line-height: 26px;
  font-weight: 300;
  text-shadow: ${props => props.theme.textShadow};
  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1px;
  }

  @media (min-width: 1380px) {
    font-size: 23px;
    line-height: 42px;
  }
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  callToActions
}) => (
  <>
    <Banner>
      <BannerImage
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      >
        <Container>
          <BannerTextWrap>
            <Title>{title}</Title>
            <Subtitle>{subheading}</Subtitle>
          </BannerTextWrap>
        </Container>
        <Slant />
      </BannerImage>
    </Banner>
    <LiftOff>
      <Container>
        <CallToActions data={callToActions} />
        <LatestNewsHome />
      </Container>
    </LiftOff>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const callToActions = [];

  Object.keys(frontmatter).forEach(key => {
    if (key.includes("cta")) {
      callToActions.push(frontmatter[key]);
    }
  });

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        callToActions={callToActions}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 40) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        heading
        subheading
        cta1 {
          heading
          description
          linkType
          linkURL
        }
        cta2 {
          heading
          description
          linkType
          linkURL
        }
        cta3 {
          heading
          description
          linkType
          linkURL
        }
      }
    }
  }
`;
