import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Banner from '../components/ui/Banner';
import Container from '../components/ui/Container';
import DateAuthor from '../components/ui/DateAuthor';
import LiftOff from '../components/ui/LiftOff';
import Slant from '../components/ui/Slant';
import Title from '../components/ui/Title';
import NewsArea from '../components/NewsArea';
import TitleWrapper from '../components/ui/TitleWrapper';

const ConentWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

const LeftContent = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const RightContent = styled.div`
  @media (min-width: 992px) {
    flex-basis: 35%;
  }
`;

const ImgWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 260px;
  }
`;

export const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  date,
  helmet,
  image,
  otherNews
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
          <article>
            <DateAuthor>
              <p>By the Save Waterloo Dock Team</p> <p>{date}</p>
            </DateAuthor>
            <ConentWrapper>
              <LeftContent>
                {description && description.length ? (
                  <PostContent content={`<p>${description}</p>`} />
                ) : null}
                <PostContent content={content} />
              </LeftContent>
              <RightContent>
                <ImgWrapper>
                  <Img fluid={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt={title} />
                </ImgWrapper>
                <NewsArea otherNews={otherNews} />
              </RightContent>
            </ConentWrapper>
          </article>
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
  date: PropTypes.string,
  image: PropTypes.object,
  helmet: PropTypes.object
};

const NewsPost = ({ data }) => {
  const post = data.page;

  return (
    <Layout>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        image={post.frontmatter.image}
        id={post.frontmatter.id}
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
        otherNews={data.others}
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
  query NewsPostByID($id: String) {
    page: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    others: allMarkdownRemark(
      filter: {
        id: { ne: $id }
        frontmatter: { templateKey: { eq: "news-post" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
