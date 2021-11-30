import { ThemeProvider } from '@mds/mds-reactjs-library';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JourneyPage from './pages/Journey';
import Login from './Login';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="journey" element={<JourneyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
