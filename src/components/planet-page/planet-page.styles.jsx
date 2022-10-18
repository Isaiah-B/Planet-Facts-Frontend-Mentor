import styled from 'styled-components';
import { device } from '../../media-variables';
import { PlanetInfoContainer } from '../planet-info/planet-info.styles';
import { PlanetPageSelectorContainer } from '../planet-page-selector/planet-page-selector.styles';

export const PlanetPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.6em;

  margin: 0 auto;
  padding-top: 14rem;
  width: 111em;
  color: hsl(0, 0%, 100%);

  @media (max-width: 73em) {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 90%;
    gap: 4.4rem;
  }
  
  @media (max-width: 41em) {
    padding: 0;
  }
`;

export const PageTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9em;

  position: relative;

  @media ${device.tablet} {
    flex-direction: column;
    padding-top: 50.2rem;
  }

  @media (max-width: 41em) {
    padding: 0;
  }
`;

export const PlanetImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -1.6rem;
  left: -7rem;
  width: 69%;
  height: 100%;

  @media (max-width: 73em) {
    left: -1rem;
  }

  @media ${device.laptop} {
    transform: scale(0.7);
    width: 62%
  }

  @media ${device.tablet} {
    top: -23rem;
    left: 50%;
    transform: scale(0.64) translateX(-78%);
    width: 50%;
  }

  @media (max-width: 41em) {
    top: -6rem;
    left: 25%;
    transform: scale(0.5);
  }

  @media ${device.mobile} {
    top: -12rem;
    transform: scale(0.4);
  }
`;

export const InfoSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 31%;

  @media ${device.laptop} {
    width: 38%;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 13.4rem;
    width: 100%;

    ${PlanetInfoContainer} {
      width: 53%;
    }

    ${PlanetPageSelectorContainer} {
      width: 47%;
    }
  }

  @media (max-width: 41em) {
    flex-direction: column-reverse;
    gap: 50rem;

    ${PlanetInfoContainer} {
      width: 100%;
    }

    ${PlanetPageSelectorContainer} {
      width: 100%;
    }
  }

  @media ${device.mobile} {
    gap: 42.6rem;
  }
`;
