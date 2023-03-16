import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar, Popup, StepsForm } from './components';
import { Cart, Carts, NotFound } from './pages';
import useCarts from './hooks/useCarts';

export const App = () => {
  useCarts();
  return (
    <>
      <AppShell />
      <Routes>
        <Route path="*" element={<Navigate to="/carts" replace />} />
        <Route path="carts" element={<Carts />} />
        <Route path="carts/:id" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const AppShell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflowY = 'hidden';
      document.documentElement.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.paddingRight = '0px';
    }
  }, [isOpen]);

  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <Popup isOpen={isOpen} handleClose={handleClose} title="Add new cart!">
        <StepsForm />
      </Popup>
    </>
  );
};
