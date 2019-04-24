import styled from "styled-components";

const Banner = styled.div`
  position: relative;
  padding-top: 28px;
  padding-bottom: 28px;
  background-size: cover;
  background-color: ${props => props.theme.darkColor};
  color: ${props => props.theme.white};
  overflow: hidden;
  @media (min-width: 768px) {
    padding-top: 38px;
    padding-bottom: 38px;
  }
  @media (min-width: 992px) {
    padding-top: 50px;
    padding-bottom: 130px;
  }

  @media (min-width: 1380px) {
    padding-top: 80px;
    padding-bottom: 180px;
  }
`;

export default Banner;
