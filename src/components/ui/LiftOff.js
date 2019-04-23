import styled from "styled-components";

const LiftOff = styled.section`
  position: relative;
  z-index: 200;
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.textShadow};
  border-radius: 4px;
  padding-top: 75px;
  padding-bottom: 75px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 992px) {
    max-width: 1032px;
    margin: 0 auto;
    transform: translateY(-80px);
    margin-bottom: -80px;
  }

  @media (min-width: 1380px) {
    max-width: 1420px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin-bottom: -100px;
    transform: translateY(-100px);
  }
`;
export default LiftOff;
