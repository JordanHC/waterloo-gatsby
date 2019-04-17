import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import App from "../components/App";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { NavigationProvider } from "../context/NavigationContext";

const FakeBody = styled.div`
  width: 100%;
  overflow: hidden;
`;

const theme = {
  darkColor: "#111111",
  white: "#ffffff",
  navy: "#13151E"
};

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

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
        <App />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
