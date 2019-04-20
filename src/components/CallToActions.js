import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeadingThree from "./ui/HeadingThree";
import Text from "./ui/Text";
import Anchor from "./ui/Anchor";

const CallToActionSection = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 1380px) {
    padding-top: 60px;
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
`;

const CallToActionText = styled(Text)`
  max-width: 320px;
  padding-right: 20px;

  @media (min-width: 992px) {
    padding-right: 10px;
  }

  @media (min-width: 1380px) {
    max-width: 400px;
    padding-right: 0;
  }
`;

const CallToActions = ({ data }) => (
  <CallToActionSection>
    <CallToActionList>
      {data.map(cta => (
        <CallToAction key={cta.heading}>
          <HeadingThree>{cta.heading}</HeadingThree>
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
