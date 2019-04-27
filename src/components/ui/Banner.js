import styled from "styled-components";

const Banner = styled.div`
  position: relative;
  padding-top: 38px;
  padding-bottom: 38px;
  background-size: cover;
  background-color: ${props => props.theme.darkColor};
  color: ${props => props.theme.white};
  overflow: hidden;
  @media (min-width: 768px) {
    padding-top: 45px;
    padding-bottom: 45px;
  }
  @media (min-width: 992px) {
    padding-top: 70px;
    padding-bottom: 150px;
  }

  @media (min-width: 1380px) {
    padding-top: 100px;
    padding-bottom: 200px;
  }
`;

export default Banner;
