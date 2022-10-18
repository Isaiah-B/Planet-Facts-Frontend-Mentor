import { useContext } from 'react';

import { PlanetDataContext } from '../../context/planetDataContext';

import { PlanetStatCardContainer, PlanetStatsContainer } from './planet-stats.styles';

function PlanetStatCard({ title, stat }) {
  return (
    <PlanetStatCardContainer>
      <h2>{title}</h2>
      <span>{stat}</span>
    </PlanetStatCardContainer>
  );
}

function PlanetStats() {
  const { current } = useContext(PlanetDataContext);
  const {
    rotation,
    revolution,
    radius,
    temperature,
  } = current;

  return (
    <PlanetStatsContainer>
      <PlanetStatCard title="Rotation Time" stat={rotation} />
      <PlanetStatCard title="Revolution Time" stat={revolution} />
      <PlanetStatCard title="Radius" stat={radius} />
      <PlanetStatCard title="Average Temp." stat={temperature} />
    </PlanetStatsContainer>
  );
}

export default PlanetStats;
