import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JourneyPage from './pages/Journey';
import { ThemeProvider } from '@mds/mds-reactjs-library';

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
