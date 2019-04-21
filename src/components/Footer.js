import React from "react";
import styled from "styled-components";
import Contact from "./Contact";

const FooterSection = styled.footer`
  background: ${props => props.theme.darkColor};
  padding-top: 75px;
  padding-bottom: 75px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    transform: translateY(-80px);
    margin-bottom: -80px;
    padding-top: 160px;
    padding-bottom: 80px;
  }
  @media (min-width: 1380px) {
    transform: translateY(-100px);
    margin-bottom: -100px;
    padding-top: 240px;
    padding-bottom: 100px;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterSection>
        <Contact />
        Footer
      </FooterSection>
    );
  }
};

export default Footer;
