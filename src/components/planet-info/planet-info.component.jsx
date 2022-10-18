import { useContext } from 'react';

import { PlanetDataContext } from '../../context/planetDataContext';

import { ReactComponent as SourceIcon } from '../../icons/icon-source.svg';
import {
  PlanetInfoContainer, PlanetInfoSource, PlanetInfoText, PlanetName,
} from './planet-info.styles';

function PlanetInfo({ infoState }) {
  const { current } = useContext(PlanetDataContext);
  return (
    <PlanetInfoContainer>
      <PlanetName>{current.name}</PlanetName>
      <PlanetInfoText>
        <p>
          {current[infoState].content}
        </p>
      </PlanetInfoText>
      <PlanetInfoSource>
        <span>Source :&nbsp;</span>
        <div>
          <a href={current[infoState].source}>Wikipedia</a>
          <SourceIcon />
        </div>
      </PlanetInfoSource>
    </PlanetInfoContainer>
  );
}

export default PlanetInfo;
