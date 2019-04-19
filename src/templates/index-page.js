import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
// import LatestNewsRoll from "../components/LatestNewsRoll";

const Banner = styled.section`
  color: ${props => props.theme.white};
`;

const BannerImage = styled.div`
  padding-top: 40px;
  padding-bottom: 160px;
  background-size: cover;
  background-position: 50%;
  background-color: ${props => props.theme.darkColor};
  @media (min-width: 992px) {
    padding-top: 90px;
    min-height: 500px;
  }

  @media (min-width: 1380px) {
    padding-top: 150px;
    min-height: 800px;
  }
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 992px) {
    max-width: 952px;
    margin: 0 auto;
  }
  @media (min-width: 1380px) {
    max-width: 1340px;
  }
`;

const BannerTextWrap = styled.div`
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
    line-height: 68px;
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

export const IndexPageTemplate = ({ image, title, heading, subheading }) => (
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
    </BannerImage>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  {/* <LatestNewsRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/latest-news">
                      Read more
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Banner>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
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
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;
