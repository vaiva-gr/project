import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family: "Roboto", Geneva, Verdana, sans-serif;
    font-weight: 400;
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
  }

  #root {
    height: 100%;
  }

 `;
