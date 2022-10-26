import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Consultants } from './components/pages/Consultants';
import { Customers } from './components/pages/Customers';
import { Main } from './components/pages/Main';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}
