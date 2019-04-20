import styled from "styled-components";

const Text = styled.p`
  font-size: 13px;
  line-height: 22px;
  ${props => (props.margin ? `margin-top: 0;` : ``)}

  @media (min-width: 768px) {
    ${props =>
      props.margin
        ? `
      margin-bottom: 40px;`
        : ``}
  }

  @media (min-width: 992px) {
    font-size: 14px;
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
    font-size: 16px;
    line-height: 28px;
  }
`;
export default Text;
