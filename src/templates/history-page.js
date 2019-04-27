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

export const HistoryPageTemplate = ({
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

HistoryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const HistoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HistoryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

HistoryPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HistoryPage;

export const historyPageQuery = graphql`
  query HistoryPage($id: String!) {
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
