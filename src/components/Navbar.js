import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Burger from './Burger';
import { useNavigationValue } from '../context/NavigationContext';

const Navigation = styled.nav`
  position: relative;
  z-index: 100;
  background: ${props => props.theme.darkColor};
  color: ${props => props.theme.white};
`;

const NavContainer = styled.div`
  width: 100%;
`;

const NavigationLogoBurger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationList = styled.ul`
  @media (max-width: 1199px) {
    flex-direction: column;
  }
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  &:first-child {
    a {
      @media (max-width: 991px) {
        border-width: 0;
      }
    }
  }


  @media (min-width: 1200px) {
    ${props => (props.isHomeLink ? `display:none` : ``)}
  }

  position: relative;

  span {
    cursor: pointer;
    ${props => props.contact && `background: ${props.theme.navy};`};
  }

  a,
  span {
    display: block;
    font-size: 13px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.white};

    @media (max-width: 1199px) {
      padding: 15px;
      line-height: 22px;
      border-top: ${props => props.theme.navBorderValue};
    }

    @media (min-width: 1200px) {
      padding: 30px 20px;
      font-size: 14px;
      border-left: ${props => props.theme.navBorderValue};
      transition: ${props => props.theme.normalTransition};
    }

    @media (min-width: 1600px) {
      padding: 40px 30px;
      font-size: 18px;
    }

    &:hover {
      @media (min-width: 1200px) {
        background: ${props => props.theme.blueFaded};
      }
    }
  }

  ${props =>
    props.hasChildren &&
    `

    span {
      position: relative;
        @media (min-width: 1200px) {
          display: block;
          padding-right: 50px;
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-4px);
            margin-left: 10px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid ${props.theme.white};
          }
      }`
  }
`;

const NavigationMenu = styled.div`
  transition: ${props => props.theme.normalTransition};
  @media (max-width: 1199px) {
    background: ${props => props.theme.navy};
    position: fixed;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100%;
  }
  &.is-active {
    @media (max-width: 1199px) {
      right: 0;
    }
  }
`;

const NavigationSubMenu = styled.ul`
  display: ${props => (props.show ? `block` : 'none')};
  padding-left: 0;

  @media (max-width: 1199px) {
    a {
      padding-left: 30px !important;
    }
  }

  @media (min-width: 1200px) {
    position: absolute;
    display: block;
    left: -9999em;
    background: ${props => props.theme.darkColor};
    ${NavigationItem}:hover & {
      left: 0;
    }

    a {
      border-top: ${props => props.theme.navBorderValue};
      line-height: 22px;
    }
  }
`;

const NavigationWrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;

const LinkLogo = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
`;

const Logo = styled.span`
  padding-left: 20px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  a,
  a:visited & {
    color: ${props => props.theme.white};
  }

  @media (min-width: 1200px) {
    padding-left: 30px;
    font-size: 18px;
  }

  @media (min-width: 1600px) {
    font-size: 24px;
  }
`;

const Navbar = () => {
  const [{ isActive }, dispatch] = useNavigationValue();

  const [showSubMenu, setShowSubMenu] = useState(false);

  function scrollToContact() {
    const element = document.querySelector('form[name="contact"]');
    element.scrollIntoView({ behavior: 'smooth' });
    toggleNavBar();
  }

  function toggleNavBar() {
    dispatch({
      type: 'toggleNav',
      isActive: !isActive
    });
  }

  return (
    <Navigation>
      <NavContainer>
        <NavigationWrapper>
          <NavigationLogoBurger>
            <LinkLogo to='/' title='Logo'>
              <Logo>Save Waterloo Dock</Logo>
            </LinkLogo>
            <Burger toggle={toggleNavBar} isActive={isActive} />
          </NavigationLogoBurger>
          <NavigationMenu className={isActive ? 'is-active' : ''}>
            <NavigationList>
              <NavigationItem isHomeLink>
                <Link to='/'>Home</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to='/campaign-updates'>Campaign Updates</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to='/why-we-are-fighting'>What we are fighting for</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to='/history'>History</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to='/how-to-help'>How To Help</Link>
              </NavigationItem>
              <NavigationItem hasChildren>
                <span onClick={() => setShowSubMenu(!showSubMenu)}>
                  News Centre
                </span>
                <NavigationSubMenu show={showSubMenu}>
                  <Link to='/latest-news'>Latest News</Link>
                  <Link to='/residents-letters'>Residents Letters</Link>
                </NavigationSubMenu>
              </NavigationItem>
              <NavigationItem contact>
                <span onClick={scrollToContact}>Contact</span>
              </NavigationItem>
            </NavigationList>
          </NavigationMenu>
        </NavigationWrapper>
      </NavContainer>
    </Navigation>
  );
};

export default Navbar;
