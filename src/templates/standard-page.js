import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import LiftOff from "../components/ui/LiftOff";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import TitleWrapper from "../components/ui/TitleWrapper";
import Banner from "../components/ui/Banner";
import Slant from "../components/ui/Slant";

export const StandardPageTemplate = ({
  title,
  content,
  contentComponent,
  image
}) => {
  const PageContent = contentComponent || Content;

  return (
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
            <Title noMargin>{title}</Title>
          </TitleWrapper>
        </Container>
        <Slant />
      </Banner>
      <LiftOff smaller>
        <Container>
          <PageContent className="content" content={content} />
        </Container>
      </LiftOff>
    </>
  );
};

StandardPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const StandardPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <StandardPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

StandardPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default StandardPage;

export const standardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
