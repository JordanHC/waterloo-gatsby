import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

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

const CallToActionTitle = styled.h3`
  margin-bottom: 18px;
  font-size: 18px;
  @media (min-width: 992px) {
    font-size: 22px;
    line-height: 32px;
    max-width: 210px;
  }

  @media (min-width: 1380px) {
    max-width: 250px;
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 24px;
  }

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 40px;
    margin-top: 18px;
    background: ${props => props.theme.blue};

    @media (min-width: 992px) {
      width: 55px;
    }

    @media (min-width: 1380px) {
      margin-top: 25px;
    }
  }
`;

const CallToActionLink = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 14px;
  border: 1px solid ${props => props.theme.blue};
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.blue};
  transition: ${props => props.theme.normalTransition};

  @media (min-width: 768px) {
    margin-top: auto;
  }

  @media (min-width: 992px) {
    padding: 14px 26px;
    font-size: 15px;
    line-height: 15px;
  }

  @media (min-width: 1380px) {
    font-size: 16px;
    line-height: 16px;
    padding: 15px 30px;
  }

  &:visited {
    color: ${props => props.theme.blue};
  }

  &:hover {
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
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

const CallToActionText = styled.p`
  max-width: 320px;
  font-size: 14px;
  line-height: 22px;
  margin-top: 0;
  padding-right: 20px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    margin-bottom: 50px;
    padding-right: 10px;
  }

  @media (min-width: 1380px) {
    max-width: 400px;
    padding-right: 0;
    margin-bottom: 56px;
    font-size: 16px;
    line-height: 28px;
  }
`;

const CallToActions = ({ data }) => (
  <CallToActionSection>
    <CallToActionList>
      {data.map(cta => (
        <CallToAction key={cta.heading}>
          <CallToActionTitle>{cta.heading}</CallToActionTitle>
          <CallToActionText>{cta.description}</CallToActionText>
          <CallToActionLink to={cta.linkURL}>Read More</CallToActionLink>
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
