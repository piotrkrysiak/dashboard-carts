import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Cart } from './pages/Cart';
import { Carts } from './pages/Carts';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/carts" replace />} />
        <Route path="carts" element={<Carts />} />
        <Route path="carts/:id" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
