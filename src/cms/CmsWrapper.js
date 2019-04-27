import React from "react";
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

const CmsWrapper = ({ children }) => {
  const iframe = document.querySelectorAll('iframe')[0];
  const iframeHeadElem = iframe.contentDocument.head;

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager target={iframeHeadElem}>
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
};

export default CmsWrapper;
