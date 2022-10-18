import { useState, useContext, useEffect } from 'react';

import { PlanetDataContext } from '../../context/planetDataContext';

import { ButtonContainer, PlanetPageSelectorContainer } from './planet-page-selector.styles';

function Button({
  isMobile, index, selected, children, planet, handleSelectButton,
}) {
  return (
    <ButtonContainer
      planet={planet}
      className={selected === index ? 'selected' : ''}
      onClick={() => handleSelectButton(index)}
    >
      <span>{isMobile ? '' : `0${index}` }</span>
      {children}
    </ButtonContainer>
  );
}

function PlanetPageSelector({ handleSelectInfo }) {
  const { current, INFO_STATES } = useContext(PlanetDataContext);
  const [selected, setSelected] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Listen for the window's width and store in the state
  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Map the buttons' indexes to the INFO_STATES object
  // to send the state to the parent rather than the index
  const INFO_STATES_INDEX_MAP = Object.keys(INFO_STATES);

  const selectInfo = (buttonIndex) => {
    setSelected(buttonIndex);
    handleSelectInfo(INFO_STATES_INDEX_MAP[buttonIndex - 1]);
  };

  const buttonTitles = ['Overview', 'Internal Structure', 'Surface Geology'];
  const buttonTitlesMobile = ['Overview', 'Structure', 'Surface'];

  const buttonNameList = screenWidth > 656
    ? buttonTitles
    : buttonTitlesMobile;

  return (
    <PlanetPageSelectorContainer>
      {
        buttonNameList.map((el, index) => (
          <Button
            key={el}
            isMobile={screenWidth <= 656}
            index={index + 1}
            selected={selected}
            planet={current.name}
            handleSelectButton={selectInfo}
          >
            {el}
          </Button>
        ))
      }
    </PlanetPageSelectorContainer>
  );
}

export default PlanetPageSelector;
