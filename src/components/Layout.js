import React from "react";
import { ThemeProvider } from "styled-components";
import App from "../components/App";
import "./all.scss";
import { NavigationProvider } from "../context/NavigationContext";

const theme = {
  darkColor: "#111111",
  white: "#ffffff",
  inputColour: "rgba(255, 255, 255, 0.8)",
  navy: "#13151E",
  blue: "#04388E",
  normalTransition: "0.3s all ease-in-out",
  burgerTransition: "0.7s all ease",
  navBorderValue: "1px solid rgba(216,216,216,0.20)",
  blueFaded: "rgba(0, 58, 156, 0.8)",
  textShadow: " 0 2px 4px rgba(0, 0, 0, 0.5)"
};

const TemplateWrapper = ({ children }) => {
  const isNavActive = {
    isActive: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleNav":
        return {
          ...state,
          isActive: action.isActive
        };
      default:
        return state;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider initialState={isNavActive} reducer={reducer}>
        <App>{children}</App>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
