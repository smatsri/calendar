import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  background-color: black;
  color: white;
  direction: rtl;
  text-align: right;
  font-family: "Alef Hebrew", sans-serif;
  cursor: default;
}

#root {
  height: 100vh;
}

`;

export default GlobalStyle;