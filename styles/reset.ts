import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 80%; 
    height: 100vh;
  }
  body {
    box-sizing: border-box;
    font-size: 1.6rem;   
  }
  h1, h2 {
    height: 0;
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a, button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }
  #fp-nav ul li a span, .fp-slidesNav ul li a span {
    background: #FFD859 !important;
  }
  
`;

export default GlobalStyle;
