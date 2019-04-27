import styled from "styled-components";

const Text = styled.p`
  font-size: 14px;
  line-height: 23px;
  ${props => (props.margin ? `margin-top: 0;` : ``)}

  @media (min-width: 768px) {
    ${props =>
      props.margin
        ? `
      margin-bottom: 40px;`
        : ``}
  }

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 26px;
    ${props =>
      props.margin
        ? `
    margin-bottom: 50px;`
        : ``}
  }

  @media (min-width: 1380px) {
    ${props =>
      props.margin
        ? `
    margin-bottom: 56px;`
        : ``}
    font-size: 18px;
    line-height: 32px;
  }
`;
export default Text;
