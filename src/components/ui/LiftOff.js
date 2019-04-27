import styled from "styled-components";

const LiftOff = styled.section`
  position: relative;
  z-index: 200;
  padding-bottom: ${props => props.smaller ? `60px` : `75px`};
  padding-top: ${props => props.smaller ? `35px` : `75px`};
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.textShadow};
  border-radius: 4px;
  @media (min-width: 768px) {
    padding-top: ${props => props.smaller ? `60px` : `80px`};
    padding-bottom: ${props => props.smaller ? `60px` : `80px`};
  }
  @media (min-width: 992px) {
    max-width: 1032px;
    margin: 0 auto;
    transform: translateY(-80px);
    margin-bottom: -80px;
  }

  @media (min-width: 1380px) {
    max-width: 1420px;
    padding-top: ${props => props.smaller ? `70px` : `100px`};
    padding-bottom: ${props => props.smaller ? `70px` : `100px`};
    margin-bottom: -100px;
    transform: translateY(-100px);
  }
`;
export default LiftOff;
