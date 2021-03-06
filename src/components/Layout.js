import React from "react";
import { ThemeProvider } from "styled-components";
import App from "../components/App";
import "./normalise.css";
import theme from '../utils/theme';
import { NavigationProvider } from "../context/NavigationContext";

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
