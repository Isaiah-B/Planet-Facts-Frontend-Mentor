import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlanetDataProvider } from './context/planetDataContext';

import { GlobalStyles } from './index.styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlanetDataProvider>
    <GlobalStyles />
    <App />
  </PlanetDataProvider>,
);
