import styled from 'styled-components';
import { device } from '../../media-variables';

const desktopMenuColors = {
  Mercury: '#419EBB',
  Venus: '#EDA249',
  Earth: '#6f2ed6',
  Mars: '#D14C32',
  Jupiter: '#D83A34',
  Saturn: '#CD5120',
  Uranus: '#1ec2a4',
  Neptune: '#2d68f0',
};

const mobileMenuColors = {
  Mercury: '#DEF4FC',
  Venus: '#F7CC7F',
  Earth: '#545BFE',
  Mars: '#FF6A45',
  Jupiter: '#ECAD7A',
  Saturn: '#FCCB6B',
  Uranus: '#65F0D5',
  Neptune: '#497EFA',
};

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 28px;
  border-bottom: 1px solid hsl(240, 17%, 26%);

  @media ${device.tablet} {
    flex-direction: column;
    padding: 36px 47px 0;
    gap: 13px;
  }

  @media (max-width: 41em) {
    flex-direction: row;
    padding: 36px 47px;

    &::after {
      display: none;
      content: '';
      position: absolute;
      top: 14rem;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 700;
      background-color: hsla(0, 0%, 0%, 0.8);
    }

    .mobile-open&::after {
      display: block;
    }
  }

  @media ${device.mobile} {
    padding: 20px 26px;

    &::after {
      top: 9.6rem;
    }
  }
  `;

export const HeaderTitle = styled.span`
  font-family: 'Antonio', sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
  z-index: 800;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 57em) {
    gap: 14px;
  }

  @media ${device.tablet} {
    width: 100%;
    justify-content: space-between;
  }

  //-----MOBILE MENU----//
  @media (max-width: 41em) {
    flex-direction: column;
    gap: 0;

    position: absolute;
    top: 14rem;
    left: 0;
    z-index: 999;
    transform: translateX(-100%);

    width: 58%;
    padding: 3.7rem 0 5rem;
    background-color: hsl(240, 67%, 8%);
    transition: all 0.3s ease-out;

    /* Hide menu visually and from screen readers */
    opacity: 0;
    visibility: hidden;
    /* Prevent access from device inputs  */
    pointer-events: none;

    & li {
      display: flex;
      justify-content: flex-start;
      padding-left: 3.3rem;
    }

    & li :only-child {
      width: 90%;
    }

    & li:not(:last-child) :only-child {
      border-bottom: 1px solid hsl(240, 17%, 26%);
    }

    .mobile-open > & {
      display: flex;
      transform: translateX(0%);

      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  @media ${device.mobile} {
    width: 100%;
    top: 9.5rem;
  }
`;

export const MenuButtonContainer = styled.button`
  font-family: 'League Spartan', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: hsl(0, 0%, 80%);

  padding: 34px 0;
  border: none;
  background: none;
  
  &:hover {
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }

  &.active {
    padding-top: 30px;
    border-top: 4px solid ${(props) => desktopMenuColors[props.selectedColor]};
    color: hsl(0, 0%, 100%);
  }

  @media ${device.tablet} {
    padding: 32px 0 33px;

    &.active {
      padding-top: 32px;
      border-top: 0;
      border-bottom: 4px solid ${(props) => desktopMenuColors[props.selectedColor]};
    }
  }

  //-----------MOBILE MENU BUTTON-----------//
  @media (max-width: 41em) {
    display: flex;
    align-items: center;
    gap: 24px;

    padding: 24px 0;
    width: 100%;
    
    font-size: 18px;
    font-weight: 500;
    color: hsl(0, 0%, 100%);

    &.active {
      padding: 24px 0;
    }

    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => mobileMenuColors[props.children]};
    }

    &::after {
      content: url(./assets/icon-chevron.svg);
      margin-left: auto;
    }
  }
`;

// ------------MOBILE COMPONENTS------------ //
export const HamburgerButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 800;

  @media (max-width: 41em) {
    display: flex;
    transform: scale(1.3);

    .mobile-open & {
      opacity: 0.5;
    }
  }

  @media ${device.mobile} {
    transform: scale(1);
  }
`;
