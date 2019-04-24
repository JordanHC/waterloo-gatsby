import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Thanks from "./thanks";

export default ({ data }) => {
  console.log(data);
  return <Thanks data={data} />;
};

export const query = graphql`
  query ThanksQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "thanks" } } }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            heading
            subheading
          }
        }
      }
    }
  }
`;
