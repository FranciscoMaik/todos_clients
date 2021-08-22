import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 62.5%;

  }

  body {
    font-family: Roboto, sans-serif;
    background-color: #0F0F0F;
  }

  button {
    cursor: pointer;
  }
 `;
