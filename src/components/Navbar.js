import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { NavigationContext } from "../context/NavigationContext";

const Navigation = styled.nav`
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

const NavigationMenu = styled.div`
  position: fixed;
  right: -100%;
`;

const Burger = styled.div`
  padding: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  background: ${props => props.theme.navy};
`;

const BurgerLine = styled.span`
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
`;

const NavigationWrapper = styled.div``;

const Logo = styled.span`
  padding-left: 20px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  a:visited & {
    color: ${props => props.theme.white};
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  static contextType = NavigationContext;

  render() {
    const [{ isActive }, dispatch] = this.context;
    return (
      <Navigation>
        <NavContainer>
          <NavigationWrapper>
            <NavigationLogoBurger>
              <Link to="/" title="Logo">
                <Logo>Save Waterloo Dock</Logo>
              </Link>
              {/* Hamburger menu */}
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
              <div>
                <Link to="/history">History</Link>
                <Link to="/how-to-help">How To Help</Link>
                <Link to="/latest-news">Latest News</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/contact/examples">Form Examples</Link>
              </div>
            </NavigationMenu>
          </NavigationWrapper>
        </NavContainer>
      </Navigation>
    );
  }
};

export default Navbar;
