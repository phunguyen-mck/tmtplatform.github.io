import React from 'react';
import { ThemeProvider } from '@mds/mds-reactjs-library';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JourneyPage from './pages/Journey';
import StrategyHubPage from './pages/StrategyHub';

import RoutePathsMap from './constant/RoutePathsMap';

import Login from './Login';
import SelectJourney from './pages/SelectJourney';
import HeaderComponent from './components/layout/Header';
import TestPage from './TestPage';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path={RoutePathsMap.Journey.index}
            element={<JourneyPage />}
          ></Route>
          <Route
            path={RoutePathsMap.Journey.StrategyHub}
            element={<StrategyHubPage />}
          />
          <Route
            path={RoutePathsMap.Journey.Setup}
            element={<SelectJourney />}
          />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
