import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import LiftOff from "../../components/ui/LiftOff";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import TitleWrapper from "../../components/ui/TitleWrapper";
import Banner from "../../components/ui/Banner";
import Slant from "../../components/ui/Slant";
import LatestNewsRoll from "../../components/LatestNewsRoll";

class LatestNewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Banner
          style={{
            backgroundImage: `url('/img/banner-small.png')`
          }}
        >
          <Container>
            <TitleWrapper>
              <Title noMargin>Latest News</Title>
            </TitleWrapper>
          </Container>
          <Slant />
        </Banner>
        <LiftOff>
          <Container>
            <LatestNewsRoll data={this.props.data} />
          </Container>
        </LiftOff>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query AllNewsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 220)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                image {
                  childImageSharp {
                    fluid(maxWidth: 580, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LatestNewsIndexPage data={data} />}
  />
);
