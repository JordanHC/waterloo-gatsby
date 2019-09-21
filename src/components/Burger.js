import React from 'react';
import styled from 'styled-components';

const BurgerWrap = styled.div`
  @media (max-width: 1199px) {
    padding: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    background: ${props => props.theme.navy};
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const BurgerLine = styled.span`
  @media (max-width: 1199px) {
    height: 2px;
    width: ${props => (props.middle ? '20px' : '24px')};
    display: block;
    background: ${props => props.theme.white};
    margin: ${props => (props.middle ? '5px 0' : '0')};
    transition: ${props => props.theme.burgerTransition};
    .is-active & {
      ${props => (props.middle ? `opacity: 0;` : ``)}
      ${props =>
        props.top
          ? `
        transform: translateY(7px) translateX(0) rotate(45deg);
      `
          : ``}
      ${props =>
        props.bottom
          ? `
        transform: translateY(-7px) translateX(0) rotate(-45deg);
      `
          : ``}
    }
  }
`;

const Burger = ({isActive, toggle}) => {
  return (
    <BurgerWrap
      className={isActive ? 'is-active' : ''}
      aria-label='menu'
      onClick={toggle}
    >
      <BurgerLine top />
      <BurgerLine middle />
      <BurgerLine bottom />
    </BurgerWrap>
  );
};

export default Burger;
