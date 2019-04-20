import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import CallToActions from "../components/CallToActions";
import LatestNewsHome from "../components/LatestNewsHome";
import Container from "../components/ui/Container";
import HeadingThree from "../components/ui/HeadingThree";

const LiftOff = styled.section`
  position: relative;
  z-index: 200;
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.textShadow};
  border-radius: 4px;
  @media (min-width: 992px) {
    transform: translateY(-80px);
    max-width: 1032px;
    margin: 0 auto;
  }

  @media (min-width: 1380px) {
    max-width: 1420px;
  }
`;

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

const Title = styled.h1`
  margin: 0 0 28px 0;
  font-size: 22px;
  line-height: 34px;
  text-transform: uppercase;
  font-weight: 600;
  text-shadow: ${props => props.theme.textShadow};
  @media (min-width: 992px) {
    font-size: 34px;
    line-height: 52px;
    letter-spacing: 1px;
    margin-bottom: 40px;
  }

  @media (min-width: 1380px) {
    font-size: 48px;
    margin-bottom: 50px;
    line-height: 72px;
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

const Slant = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  min-height: 320px;

  @media (min-width: 992px) {
    left: -50%;
    height: 100%;
    width: 100%;
  }

  &:before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-10.5deg);
    transform-origin: 100%;
    z-index: -1;
    box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
    @media (min-width: 992px) {
      height: 100%;
      transform: skewY(0);
      transform: skewX(-22deg);
    }
  }

  &:before {
    background: rgba(0, 58, 156, 0.8);
    top: -50%;
    @media (max-width: 991px) {
      height: 120%;
    }

    @media (min-width: 768px) {
      top: -70%;
    }
    @media (min-width: 992px) {
      height: inherit;
      top: 0;
    }
  }

  &:after {
    background: rgba(0, 58, 156, 0.4);
    height: 60px;
    @media (max-width: 991px) {
      bottom: 36px;
    }

    @media (min-width: 768px) {
      bottom: 100px;
    }

    @media (min-width: 992px) {
      left: unset;
      right: -80px;
      top: 0;
      bottom: 0;
      height: inherit;
      width: 80px;
    }

    @media (min-width: 1380px) {
      width: 140px;
      right: -140px;
    }
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
            fluid(maxWidth: 2048, quality: 100) {
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
