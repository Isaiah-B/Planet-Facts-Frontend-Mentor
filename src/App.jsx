import { useContext } from 'react';
import Navigation from './components/header/header.component';
import PlanetPage from './components/planet-page/planet-page.component';
import { PlanetDataContext } from './context/planetDataContext';

function App() {
  const { current } = useContext(PlanetDataContext);

  return (
    <>
      <Navigation currentPlanet={current.name} />
      <PlanetPage />
    </>
  );
}

export default App;
