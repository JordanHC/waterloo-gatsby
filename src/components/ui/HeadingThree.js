import styled from "styled-components";

const HeadingThree = styled.h3`
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

export default HeadingThree;
