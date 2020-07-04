import { createGlobalStyle } from 'styled-components';

const softPink = '#F9D8D4';
const yellow = '#F9A734';
const DarkYellow = '#FB8B24';
const green = '#36964C';
const DarkGreen = '#286E38';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }


  body { 
    background:
    /* Pineapple details */
    radial-gradient(circle closest-side at 50px 50px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 40px 60px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 60px 60px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 50px 70px, ${DarkYellow} 3px, transparent 0),
    
    radial-gradient(circle closest-side at 150px 165px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 140px 175px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 160px 175px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 150px 185px, ${DarkYellow} 3px, transparent 0),
    
    /* Pineapple base */
    radial-gradient(ellipse closest-side at 50px 60px, ${yellow} 18px, transparent 0),
    
    radial-gradient(ellipse closest-side at 150px 175px, ${yellow} 18px, transparent 0),
    
    /* Pineapple leafs */
    radial-gradient(circle closest-side at 30px 40px, ${softPink} 15px, transparent 0),
    radial-gradient(circle closest-side at 40px 35px, ${green} 15px, transparent 0),
    radial-gradient(circle closest-side at 70px 40px, ${softPink} 15px, transparent 0),
    radial-gradient(circle closest-side at 60px 35px, ${DarkGreen} 15px, transparent 0),
    
    radial-gradient(circle closest-side at 130px 155px, ${softPink} 15px, transparent 0),
    radial-gradient(circle closest-side at 140px 150px, ${green} 15px, transparent 0),
    radial-gradient(circle at 170px 155px, ${softPink} 15px, transparent 0),
    radial-gradient(circle at 160px 150px, ${DarkGreen} 15px, transparent 0)
    ;
    background-color: ${softPink};
    background-size: 180px 210px;
    animation: animatedBackground .5s cubic-bezier(.61,-0.64,.58,1.46) forwards;
  }
  
  
  /* Animation */
  
  @keyframes animatedBackground {
    from { background-position: 0 50%; }
    to { background-position: 0 0; }
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
}


  p, li, span, input, a, button {
    font-family: 'ABeeZee', sans-serif;
  }

`;

export default GlobalStyle;
