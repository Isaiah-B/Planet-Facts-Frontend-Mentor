import { useContext, useState } from 'react';

import { PlanetDataContext } from '../../context/planetDataContext';

import PlanetImg from '../planet-img/planet-img.component';
import PlanetInfo from '../planet-info/planet-info.component';
import PlanetPageSelector from '../planet-page-selector/planet-page-selector.component';
import PlanetStats from '../planet-stats/planet-stats.component';

import {
  InfoSelectorWrapper, PageTopRow, PlanetImgWrapper, PlanetPageContainer,
} from './planet-page.styles';

function PlanetPage() {
  const { current, INFO_STATES } = useContext(PlanetDataContext);
  const [selected, setSelected] = useState(INFO_STATES.OVERVIEW);

  const selectInfo = (infoState) => {
    setSelected(INFO_STATES[infoState]);
  };

  if (!current) return null;

  const { images } = current;
  return (
    <PlanetPageContainer>
      <PageTopRow>
        <PlanetImgWrapper>
          <PlanetImg
            path={images[selected.img]}
            isGeology={selected.info === 'geology'}
          />
        </PlanetImgWrapper>

        <InfoSelectorWrapper>
          <PlanetInfo infoState={selected.info} />
          <PlanetPageSelector handleSelectInfo={selectInfo} />
        </InfoSelectorWrapper>
      </PageTopRow>

      <PlanetStats />
    </PlanetPageContainer>
  );
}

export default PlanetPage;
