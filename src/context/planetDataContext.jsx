import { createContext, useEffect, useState } from 'react';
import data from '../data.json';

export const PlanetDataContext = createContext({
  planetData: [],
  current: {},
  getPlanetData: () => {},
  setCurrentPlanet: () => {},
});

export function PlanetDataProvider({ children }) {
  const [planetData, setPlanetData] = useState([]);
  const [current, setCurrent] = useState(data[2]);

  const INFO_STATES = {
    OVERVIEW: { info: 'overview', img: 'planet' },
    STRUCTURE: { info: 'structure', img: 'internal' },
    GEOLOGY: { info: 'geology', img: 'geology' },
  };

  useEffect(() => {
    setPlanetData(data);
  }, []);

  const getPlanetData = (planetName) => (
    planetData.find((planet) => planet.name.toLowerCase() === planetName.toLowerCase())
  );

  const setCurrentPlanet = (planetName) => {
    setCurrent(getPlanetData(planetName));
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    planetData,
    getPlanetData,
    setCurrentPlanet,
    current,
    INFO_STATES,
  };

  return <PlanetDataContext.Provider value={value}>{children}</PlanetDataContext.Provider>;
}
