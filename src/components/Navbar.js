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

  span {
    cursor: pointer;
    background: ${props => props.theme.navy};
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
`;

const NavigationMenu = styled.div`
  transition: ${props => props.theme.normalTransition};
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
    width: ${props => (props.middle ? "20px" : "24px")};
    display: block;
    background: ${props => props.theme.white};
    margin: ${props => (props.middle ? "5px 0" : "0")};
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

  function scrollToContact() {
    const element = document.querySelector('form[name="contact"]');
    element.scrollIntoView({ behavior: "smooth" });
    toggleNavBar();
  }

  function toggleNavBar() {
    dispatch({
      type: "toggleNav",
      isActive: !isActive
    });
  }

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
              aria-label="menu"
              onClick={toggleNavBar}
            >
              <BurgerLine top />
              <BurgerLine middle />
              <BurgerLine bottom />
            </Burger>
          </NavigationLogoBurger>
          <NavigationMenu className={isActive ? "is-active" : ""}>
            <NavigationList>
              <NavigationItem isHomeLink>
                <Link to="/">Home</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/campaign-updates">Campaign Updates</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/why-we-are-fighting">What we are fighting for</Link>
              </NavigationItem>
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
