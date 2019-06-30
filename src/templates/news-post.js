import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import Banner from '../components/ui/Banner';
import TitleWrapper from '../components/ui/TitleWrapper';
import Slant from '../components/ui/Slant';
import LiftOff from '../components/ui/LiftOff';
import Content, { HTMLContent } from '../components/Content';

export const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <Banner
        style={{
          backgroundImage: `url('/img/banner-small.png')`
        }}
      >
        {helmet || ''}
        <Container>
          <TitleWrapper>
            <Title noMargin>{title}</Title>
          </TitleWrapper>
        </Container>
        <Slant />
      </Banner>
      <LiftOff smaller>
        <Container>
          {description && description.length ? (
            <PostContent content={`<p>${description}</p>`} />
          ) : null}
          <PostContent content={content} />
        </Container>
      </LiftOff>
    </>
  );
};

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | News'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default NewsPost;

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
