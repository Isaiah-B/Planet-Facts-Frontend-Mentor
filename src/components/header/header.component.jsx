import { useContext, useState } from 'react';

import { PlanetDataContext } from '../../context/planetDataContext';

import { ReactComponent as MobileHamburger } from '../../icons/icon-hamburger.svg';
import {
  HeaderContainer, HeaderTitle, HeaderMenu, MenuButtonContainer, HamburgerButton,
} from './header.styles';

function MenuButton({ children, active, handleButtonClick }) {
  const { setCurrentPlanet } = useContext(PlanetDataContext);
  const isActive = active === children;

  const setActive = () => {
    setCurrentPlanet(children);
    handleButtonClick();
  };

  return (
    <MenuButtonContainer
      className={`${isActive ? 'active' : ''}`}
      onClick={() => setActive()}
      color={active}
    >
      {children}
    </MenuButtonContainer>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { current } = useContext(PlanetDataContext);
  const { name } = current;

  const closeMobileMenu = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  const PLANET_NAMES = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ];

  return (
    <HeaderContainer className={mobileOpen ? 'mobile-open' : ''}>
      <HeaderTitle>The Planets</HeaderTitle>
      <HamburgerButton onClick={() => setMobileOpen(!mobileOpen)}>
        <MobileHamburger />
      </HamburgerButton>

      <HeaderMenu>
        {
            PLANET_NAMES.map((planetName) => (
              <li key={planetName}>
                <MenuButton
                  active={name}
                  handleButtonClick={closeMobileMenu}
                >
                  {planetName}
                </MenuButton>
              </li>
            ))
          }
      </HeaderMenu>
    </HeaderContainer>
  );
}

export default Header;
