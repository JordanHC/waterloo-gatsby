import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import LatestNewsRoll from "../components/LatestNewsRoll";
import HeadingThree from "./ui/HeadingThree";
import Anchor from "./ui/Anchor";

const Wrapper = styled.div`
  padding-top: 60px;

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    padding-top: 70px;
  }

  @media (min-width: 1380px) {
    padding-top: 80px;
  }
`;

const Title = styled(HeadingThree)`
  margin-top: 0;
  margin-bottom: 40px;
  @media (min-width: 992px) {
    margin-bottom: 60px;
  }
`;

const LinkWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
  @media (min-width: 992px) {
    margin-top: 90px;
  }
  @media (min-width: 1380px) {
    margin-top: 130px;
  }
`;

const LatestNewsHome = ({ data }) => (
  <Wrapper>
    <Title>Latest stories</Title>
    <LatestNewsRoll />
    <LinkWrap>
      <Anchor to="/latest-news">View All News...</Anchor>
    </LinkWrap>
  </Wrapper>
);

export default LatestNewsHome;