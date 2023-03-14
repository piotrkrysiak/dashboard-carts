import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Carts } from './pages/Carts';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="carts" element={<Carts />} />
        <Route path="carts/:id" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
