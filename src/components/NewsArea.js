import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

const News = styled.div`
  margin-top: 20px;
  padding: 15px;
  box-shadow: ${props => props.theme.normalShadow};
  @media (min-width: 992px) {
    margin-top: 35px;
    padding: 30px 25px;
  }

  @media (min-width: 1380px) {
    padding: 35px 30px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  color: ${props => props.theme.navy};
  @media (min-width: 1380px) {
    font-size: 18px;
  }
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    text-transform: capitalize;
    margin-top: 22px;
    @media (min-width: 1380px) {
    }
    a {
      font-size: 13px;
      color: #000;
      text-decoration: none;
      @media (min-width: 1380px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;

const NewsArea = ({ otherNews }) => {
  const { edges } = otherNews;

  return (
    <News>
      <Title>Latest Stories</Title>
      <NewsList>
        {edges.map(item => {
          return (
            <li>
              <Link to={item.node.fields.slug}>
                {item.node.frontmatter.title.toLowerCase()}
              </Link>
            </li>
          );
        })}
      </NewsList>
    </News>
  );
};

export default NewsArea;
