import styled from "styled-components";

const Slant = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  min-height: 320px;

  @media (min-width: 992px) {
    left: ${props => props.home ? `-50%` : `-46%`};
    height: 100%;
    width: 100%;
  }

  &:before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-10.5deg);
    transform-origin: 100%;
    z-index: -1;
    box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
    @media (min-width: 992px) {
      height: 100%;
      transform: skewY(0);
      transform: skewX(-22deg);
    }
  }

  &:before {
    background: rgba(0, 58, 156, 0.8);
    top: -50%;
    @media (max-width: 991px) {
      height: 120%;
    }

    @media (min-width: 768px) {
      top: -70%;
    }
    @media (min-width: 992px) {
      height: inherit;
      top: 0;
    }
  }

  &:after {
    background: rgba(0, 58, 156, 0.4);
    height: 60px;
    @media (max-width: 991px) {
      bottom: 36px;
    }

    @media (min-width: 768px) {
      bottom: 100px;
    }

    @media (min-width: 992px) {
      left: unset;
      right: -80px;
      top: 0;
      bottom: 0;
      height: inherit;
      width: 80px;
    }

    @media (min-width: 1380px) {
      width: 140px;
      right: -140px;
    }
  }
`;

export default Slant;
