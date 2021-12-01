import { ThemeProvider } from '@mds/mds-reactjs-library';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JourneyPage from './pages/Journey';
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
          <Route path="login" element={<Login />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="journey/select-journey" element={<SelectJourney />} />
          <Route path="test" element={<TestPage />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
