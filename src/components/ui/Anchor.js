import styled from "styled-components";
import { Link } from "gatsby";

const Anchor = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  padding: ${props => (props.small ? `6px 14px` : `10px 20px`)};
  font-size: 14px;
  line-height: 14px;
  border: 1px solid ${props => props.theme.blue};
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.blue};
  transition: ${props => props.theme.normalTransition};

  @media (min-width: 768px) {
    margin-top: ${props => (props.small ? `10px` : ` auto`)};
  }

  @media (min-width: 992px) {
    padding: ${props => (props.small ? `8px 16px` : `14px 26px`)};
    font-size: ${props => (props.small ? `14px` : `15px`)};
    line-height: 15px;
  }

  @media (min-width: 1380px) {
    font-size: ${props => (props.small ? `15pz` : `16px`)};
    line-height: 16px;
    padding: ${props => (props.small ? `10px 20px` : `15px 30px`)};
  }

  &:visited {
    color: ${props => props.theme.blue};
  }

  &:hover {
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }
`;

export default Anchor;
