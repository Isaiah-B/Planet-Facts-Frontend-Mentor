import { useContext } from 'react';

import { PlanetDataContext } from '../../context/planetDataContext';

import { GeologyImg, GeologyImgWrapper, PlanetImage } from './planet-img.styles';

function PlanetImg({ path, isGeology = false }) {
  const { current } = useContext(PlanetDataContext);

  if (isGeology) {
    let planetImgPath;
    planetImgPath = path.replace('geology', 'planet');
    planetImgPath = planetImgPath.replace('png', 'svg');

    return (
      <GeologyImgWrapper>
        <img src={planetImgPath} alt={current.name} />
        <GeologyImg src={path} alt={`Surface of ${current.name}`} />
      </GeologyImgWrapper>
    );
  }

  return (
    <PlanetImage src={path} alt={current.name} />
  );
}

export default PlanetImg;
