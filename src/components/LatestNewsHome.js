import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import LatestNewsRoll from "../components/LatestNewsRoll";
import HeadingThree from "./ui/HeadingThree";
import Anchor from "./ui/Anchor";

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 992px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media (min-width: 1380px) {
    padding-top: 80px;
    padding-bottom: 110px;
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    margin-top: 30px;
  }
  @media (min-width: 1380px) {
    margin-top: 50px;
  }
`;

const LatestNewsHome = ({ data }) => (
  <Wrapper>
    <Title className="has-text-weight-semibold is-size-2">Latest stories</Title>
    <LatestNewsRoll />
    <LinkWrap>
      <Anchor to="/latest-news">View All Our News</Anchor>
    </LinkWrap>
  </Wrapper>
);

export default LatestNewsHome;
