import styled from 'styled-components';
import { device } from '../../media-variables';

export const PlanetInfoContainer = styled.div`
  @media (max-width: 41em) {
    text-align: center;
  }


`;

export const PlanetName = styled.h1`
  font-family: 'Antonio', sans-serif;
  font-size: 6.4rem;
  text-transform: uppercase;
  font-weight: 400;
  
  margin-bottom: 3.4rem;

  @media ${device.tablet} {
    margin-bottom: 4.6rem;
  }

  @media (max-width: 41em) {
    font-size: 5.4rem;
    margin-bottom: 3.4rem;
  }
`;

export const PlanetInfoText = styled.div`
  height: 16.1rem;
  margin-bottom: 2.8rem;
  
  @media ${device.tablet} {
    margin-bottom: 4.8rem;
  }

  @media (max-width: 41em) {
    height: 7rem;
    margin-bottom: 5rem;
    padding: 0 8rem
  }

  @media (max-width: 33em) {
    padding: 0 2rem;
  }

  @media ${device.mobile} {
    margin-bottom: 12rem;
  }

  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1.6;
  }

`;

export const PlanetInfoSource = styled.div`
  font-family: 'League Spartan', sans-serif;
  font-size: 1.8rem;
  font-weight: 100;
  
  @media ${device.tablet} {
    font-size: 2.2rem;
  }

  span {
    opacity: 0.5;
  }
  
  div {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
  }

  a {
    font-weight: 400;
    opacity: 0.5;

    &:link,
    &:visited {
      color: hsl(0, 0%, 100%);
    }
  }

`;
