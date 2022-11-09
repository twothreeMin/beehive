import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Consultants } from './pages/Consultants';
import { Customers } from './pages/Customers';
import { Home } from './pages/Home/Home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}
