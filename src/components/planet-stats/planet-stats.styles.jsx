import styled from 'styled-components';
import { device } from '../../media-variables';

export const PlanetStatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 41em) {
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  @media ${device.mobile} {
    gap: 1rem;
  }
`;

export const PlanetStatCardContainer = styled.div`
  color: hsl(0, 0%, 100%);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  padding: 2.6rem 2.4rem 3rem 2.4rem;
  width: 24%;

  @media (max-width: 41em) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }

  @media (max-width: 33em) {
    width: 100%;
  }

  @media ${device.mobile} {
    padding: 1.9rem 3rem;
  }

  h2 {
    font-family: 'League Spartan', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    opacity: 0.5;

    margin-bottom: 1.4rem;

    @media (max-width: 41em) {
      margin-bottom: 0;
    }

    @media ${device.mobile} {
      font-size: 1.3rem
    }
  }

  span {
    font-family: 'Antonio', sans-serif;
    font-size: 4rem;
    text-transform: uppercase;

    @media (max-width: 57em) {
      font-size: 3.2rem;
    }

    @media (max-width: 41em) {
      font-size: 3rem;
    }

    @media ${device.mobile} {
      font-size: 2.6rem
    }
  }
`;
