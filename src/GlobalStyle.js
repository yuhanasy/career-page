/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
  }

  html, body {
    @import url('https://fonts.googleapis.com/css?family=Hind:400,500|Work+Sans:500,900');
    margin: 0;
    padding: 0;
    line-height: 1.15;
    font-family: 'Hind', sans-serif;
    background-color: #F8F9FF;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
