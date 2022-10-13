import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Customers } from './components/pages/Customers';
import { Main } from './components/pages/Main';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}
