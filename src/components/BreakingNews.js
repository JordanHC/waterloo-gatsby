import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticQuery } from 'gatsby';

const Section = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 13px;
  line-height: 22px;

  @media (min-width: 1200px) {
    font-size: 15px;
    line-height: 24px;
  }

  span {
    margin: 0;
    line-height: 42px;
  }
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background: rgba(0, 0, 0, 0.9);
  @media (min-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const Lower = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 30px;
  padding-right: 30px;
  background: rgba(0, 0, 0, 0.8);
  @media (min-width: 1200px) {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const LowerText = styled.p`
  margin: 0;
`;

const Close = styled.span`
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1200px) {
    padding-left: 5px;
    padding-right: 5px;
  }
  &:after {
    content: 'X';
    padding-left: 6px;
  }
`;

const Latest = styled.span`
  background: ${props => props.theme.blue};
  letter-spacing: 0.5px;
  font-weight: 600;
  padding: 0 10px;
  @media (min-width: 1200px) {
    padding: 0 20px;
  }
`;


const BreakingNewsView = ({ data }) => {
  const [show, setShow] = useState(sessionStorage.getItem('showLatestNews') || true);

  const setWhetherToShow = () => {
    setShow(!show);
    sessionStorage.setItem('showLatestNews', false);
  }

  if (typeof data != undefined) {
    const info = data.markdownRemark.frontmatter;
    console.log(info.active && show);
    if (show == true && info.active) {
      console.log(show);
      return (
        <Section>
          <Upper>
            <Latest>{info.title}</Latest>
            <Close onClick={setWhetherToShow}>{info.close_text}</Close>
          </Upper>
          <Lower>
            <LowerText>{info.description}</LowerText>
          </Lower>
        </Section>
      );
    }
  }

  return null;
};

const BreakingNews = () => (
  <StaticQuery
    query={graphql`
      query BreakingNewsQuery {
        markdownRemark(frontmatter: { popup: { eq: true } }) {
          frontmatter {
            description
            title
            close_text
            active
            popup
          }
        }
      }
    `}
    render={data => <BreakingNewsView data={data} />}
  />
);

export default BreakingNews;
