import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeadingThree from "./ui/HeadingThree";
import Text from "./ui/Text";
import Anchor from "./ui/Anchor";

const CallToActionSection = styled.div`
  padding-bottom: 50px;

  @media (min-width: 1380px) {
    padding-bottom: 60px;
  }
`;

const CallToActionList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
  @media (min-width: 992px) {
    margin-left: -20px;
    margin-right: -20px;
    justify-content: space-between;
  }
`;

const CallToActionAnchor = styled(Anchor)`
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: auto;
  }
`;

const CallToAction = styled.li`
  @media (max-width: 767px) {
    margin-bottom: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const CallToActionText = styled(Text)`
  max-width: 320px;

  @media (max-width: 991px) {
    padding-right: 20px;
  }

  @media (min-width: 1380px) {
    max-width: 400px;
  }
`;

const Title = styled(HeadingThree)`
  margin-top: 0;
`;

const CallToActions = ({ data }) => (
  <CallToActionSection>
    <CallToActionList>
      {data.map(cta => (
        <CallToAction key={cta.heading}>
          <Title>{cta.heading}</Title>
          <CallToActionText margin>{cta.description}</CallToActionText>
          <CallToActionAnchor to={cta.linkURL}>Read More</CallToActionAnchor>
        </CallToAction>
      ))}
    </CallToActionList>
  </CallToActionSection>
);

CallToActions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      linkType: PropTypes.string,
      linkURL: PropTypes.string
    })
  )
};

export default CallToActions;
