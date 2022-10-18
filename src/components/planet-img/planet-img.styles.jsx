import styled from 'styled-components';
import { device } from '../../media-variables';

export const GeologyImgWrapper = styled.div`
`;

export const PlanetImage = styled.img`

`;

export const GeologyImg = styled.img`
  position: absolute;
  bottom: -1.6rem;
  left: 50%;
  transform: translateX(-50%);

  height: 19.8rem;

  @media ${device.tablet} {
    height: 38rem;
  }
`;
