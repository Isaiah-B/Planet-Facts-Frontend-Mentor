import { createGlobalStyle } from 'styled-components';
import { device } from './media-variables';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1;
  }

  body {
    font-family: 'Antonio' sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-image: url(./assets/background-stars.svg);
    background-color: hsl(240, 67%, 8%);
    height: 100vh;
  }

  @media ${device.laptop} {
    html {
      font-size: 55.5%;
    }
  }

  @media ${device.tablet} {
    html {
      font-size: 45.5%;
    }
  }
  
  @media (max-width: 25em) {
    html {
      font-size: 58.8%;
    }
  }

  .attribution {
    margin-top: 2rem;
    font-size: 11px;
    text-align: center; 
    width: 100%;
    bottom: 0;
    color: hsl(0, 0%, 90%);

    a {
      color: hsl(228, 45%, 44%); 
    }
  }
`;
