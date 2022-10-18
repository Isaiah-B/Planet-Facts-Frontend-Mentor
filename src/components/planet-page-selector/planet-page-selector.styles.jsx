import styled from 'styled-components';
import { device } from '../../media-variables';

const planetColors = {
  Mercury: '#419EBB',
  Venus: '#EDA249',
  Earth: '#6f2ed6',
  Mars: '#D14C32',
  Jupiter: '#D83A34',
  Saturn: '#CD5120',
  Uranus: '#1ec2a4',
  Neptune: '#2d68f0',
};

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  padding: 1.6rem 2.8rem;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  width: 100%;
  background: none;
  
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: inherit;

  &.selected {
    background-color: ${(props) => planetColors[props.planet]};
    border-color: ${(props) => planetColors[props.planet]};
  }

  &:hover {
    background-color: hsl(240, 17%, 26%);
    border-color: hsl(240, 17%, 26%);
    cursor: pointer;
  }

  span {
    opacity: 0.5;
  }

  @media ${device.tablet} {
    padding: 1.9rem 2.8rem;
  }

  @media (max-width: 41em) {
    justify-content: center;
    gap: 0;
    
    border: none;
    padding: 2.9rem 2.8rem;
    color: hsla(0, 0%, 100%, 0.5);

    &.selected {
      padding-top: 3.5rem;
      color: hsl(0,0%,100%);
      background-color: transparent;
      border-bottom: 4px solid ${(props) => planetColors[props.planet]};
    }
  }

  @media ${device.mobile} {
    padding: 2.2rem 1rem;
    width: auto;

    &.selected {
      padding-top: 2.9rem;
    }
  }
`;

export const PlanetPageSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  
  @media ${device.tablet} {
    gap: 2.2rem;
  }

  @media (max-width: 41em) {
    flex-direction: row;
    gap: 0;

    width: 100%;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 112%;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
    }
  }

  @media ${device.mobile} {
    justify-content: space-around;
  }
`;
