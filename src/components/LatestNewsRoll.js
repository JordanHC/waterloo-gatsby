import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import Text from "./ui/Text";
import Anchor from "./ui/Anchor";

const Article = styled.article`
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 767px) {
    max-width: 340px;
    margin-bottom: 60px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 992px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 82px;
  }

  @media (min-width: 1380px) {
    margin-bottom: 98px;
  }
`;

const Wrapper = styled.div`
  margin-right: -20px;
  margin-left: -20px;
  @media (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ArticleLink = styled(Link)`
  @media (min-width: 992px) {
    ${Article}:nth-child(even) & {
      order: 1;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    width: 320px;
    height: 164px;
  }

  @media (min-width: 992px) {
    width: 440px;
    height: 260px;
  }

  @media (min-width: 1380px) {
    width: auto;
    min-width: 580px;
    height: 324px;
  }
`;

const Title = styled.h4`
  font-size: 14px;
  line-height: 24px;

  a {
    text-decoration: none;
    color: #000;
  }

  @media (min-width: 992px) {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 16px;
  }

  @media (min-width: 1380px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const ArticleAnchor = styled(Anchor)`
  @media (min-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 1380px) {
    margin-top: 30px;
  }
`;

const ArticleText = styled.div`
  @media (min-width: 992px) {
    flex-basis: 50%;
    ${Article}:nth-child(even) & {
      padding-left: 40px;
      padding-right: 40px;
    }

    ${Article}:nth-child(odd) & {
      padding-right: 40px;
      padding-left: 40px;
      order: 0;
    }
  }
`;

class LatestNewsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Wrapper>
        {posts &&
          posts.map(({ node: post }) => (
            <Article key={post.id}>
              <ArticleLink to={post.fields.slug}>
                <Image
                  src={
                    !!post.frontmatter.image.childImageSharp
                      ? post.frontmatter.image.childImageSharp.fluid.src
                      : post.frontmatter.image
                  }
                  alt={`${post.frontmatter.title}`}
                />
              </ArticleLink>
              <ArticleText>
                <Title>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Title>
                <Text>{post.excerpt}</Text>
                <ArticleAnchor small to={post.fields.slug}>
                  Read More
                </ArticleAnchor>
              </ArticleText>
            </Article>
          ))}
      </Wrapper>
    );
  }
}

LatestNewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default LatestNewsRoll;
