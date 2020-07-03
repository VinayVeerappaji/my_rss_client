import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #1d1a28;
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

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Crete Round', serif;
    font-weight: initial;
    color: #802bb1;
}
  }

  p, li, span, input, a, button {
    font-family: 'ABeeZee', sans-serif;
    color: #d1d7e0;
  }
`;

export default GlobalStyle;
