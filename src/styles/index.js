
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
 
* {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    line-height: 1.4;
  }
  
  html,
  body {
    height: 100%;
    min-height: 100%;
    font-family: "Comic Sans MS", cursive, sans-serif;
    background: rgba(226, 227, 228, 0.08);
    font-size: 14px;
  }
`;
 

export { Global };