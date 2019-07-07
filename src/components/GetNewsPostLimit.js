import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const GetNewsPostLimit = Component => (
  <StaticQuery
    query={graphql`
      query LatestNewsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
          limit: 2
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
    render={(data, count) => <Component data={data} count={count} />}
  />
);

export default GetNewsPostLimit;
