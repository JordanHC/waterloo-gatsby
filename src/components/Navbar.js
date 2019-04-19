import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useNavigationValue } from "../context/NavigationContext";

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
  @media (max-width: 991px) {
    flex-direction: column;
  }
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  ${props =>
    props.contact
      ? ` a { background: ${props.theme.navy} };
      `
      : ``}
  &:first-child {
    a {
      @media (max-width: 991px) {
        border-width: 0;
      }
    }
  }
  a {
    display: block;
    font-size: 13px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.white};

    @media (max-width: 991px) {
      padding: 15px;
      border-top: ${props => props.theme.navBorderValue};
    }

    @media (min-width: 992px) {
      padding: 30px 20px;
      font-size: 14px;
      border-left: ${props => props.theme.navBorderValue};
      transition: ${props => props.theme.navTransition};
    }

    @media (min-width: 1380px) {
      padding: 40px 30px;
      font-size: 18px;
    }

    &:hover {
      @media (min-width: 992px) {
        background: ${props => props.theme.blueFaded};
      }
    }
  }
`;

const NavigationMenu = styled.div`
  transition: ${props => props.theme.navTransition};
  @media (max-width: 991px) {
    background: ${props => props.theme.navy};
    position: fixed;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100%;
  }
  &.is-active {
    @media (max-width: 991px) {
      right: 0;
    }
  }
`;

const Burger = styled.div`
  @media (max-width: 991px) {
    padding: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    background: ${props => props.theme.navy};
    cursor: pointer;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const BurgerLine = styled.span`
  @media (max-width: 991px) {
    height: 2px;
    width: ${props => (props.middle ? "20px" : "24px")};
    display: block;
    background: ${props => props.theme.white};
    margin: ${props => (props.middle ? "5px 0" : "0")};
    transition: 0.3s all ease-in-out;
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

const NavigationWrapper = styled.div`
  @media (min-width: 992px) {
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

  @media (min-width: 992px) {
    padding-left: 30px;
    font-size: 18px;
  }

  @media (min-width: 1380px) {
    font-size: 24px;
  }
`;

function Navbar() {
  const [{ isActive }, dispatch] = useNavigationValue();
  return (
    <Navigation>
      <NavContainer>
        <NavigationWrapper>
          <NavigationLogoBurger>
            <LinkLogo to="/" title="Logo">
              <Logo>Save Waterloo Dock</Logo>
            </LinkLogo>
            <Burger
              className={isActive ? "is-active" : ""}
              onClick={() =>
                dispatch({
                  type: "toggleNav",
                  isActive: !isActive
                })
              }
            >
              <BurgerLine top />
              <BurgerLine middle />
              <BurgerLine bottom />
            </Burger>
          </NavigationLogoBurger>
          <NavigationMenu className={isActive ? "is-active" : ""}>
            <NavigationList>
              <NavigationItem>
                <Link to="/history">History</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/how-to-help">How To Help</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/latest-news">Latest News</Link>
              </NavigationItem>
              <NavigationItem contact>
                <Link to="/contact">Contact</Link>
              </NavigationItem>
            </NavigationList>
          </NavigationMenu>
        </NavigationWrapper>
      </NavContainer>
    </Navigation>
  );
}

export default Navbar;
