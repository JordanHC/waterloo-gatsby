import styled from "styled-components";

const Title = styled.h1`
  margin: ${props => (props.noMargin ? `0` : `0 0 28px 0`)};
  font-family: ${props => props.theme.secondaryFont};
  font-size: 22px;
  line-height: 34px;
  text-transform: uppercase;
  font-weight: 600;
  text-shadow: ${props => props.theme.textShadow};
  @media (min-width: 992px) {
    font-size: 34px;
    line-height: 52px;
    letter-spacing: 1px;
    margin-bottom: ${props => (props.noMargin ? `` : `40px`)};
  }

  @media (min-width: 1380px) {
    font-size: 48px;
    margin-bottom: ${props => (props.noMargin ? `` : `50px`)};
    line-height: 72px;
  }
`;

export default Title;
