import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JourneyPage from './pages/Journey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="journey" element={<JourneyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
