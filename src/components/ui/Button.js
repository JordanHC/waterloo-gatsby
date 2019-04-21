import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 14px;
  border: 0;
  border-radius: 4px;
  color: ${props => props.theme.white};
  background: ${props => props.theme.blue};
  transition: ${props => props.theme.normalTransition};

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

  &:hover {
    background: ${props => props.theme.white};
    color: ${props => props.theme.blue};
  }
`;

export default Button;
