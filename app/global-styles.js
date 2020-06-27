import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #ffd0d5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  
  label {
    font-family: 'Lobster', cursive;
    line-height: 4rem;
    font-size: 2rem;
  }

  input {
    padding: 10px;
    border: 5px solid black;
    border-radius: 0;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
  }

  .request {
    padding: 10px;
    border: 5px solid black;
    border-radius: 0;
    font-family: 'Lobster', cursive;
    background-color: #CFF06A;
    font-size: 1.5rem;
    border-radius: 500px;
    min-width: 500px;
    margin: auto;
    margin-top: 10px;
  }


`;

export default GlobalStyle;
