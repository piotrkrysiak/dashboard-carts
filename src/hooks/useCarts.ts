import { useEffect, useState } from 'react';
import { useCartsContext } from '../context/CartsContext';
import { RootObject } from '../ts';

const useCarts = () => {
  const { carts, setCarts } = useCartsContext();
  const [error, setError] = useState('');

  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/cart');
        const data: RootObject = await res.json();
        setCarts(data.carts);
      } catch (err) {
        let errorMessage = 'Failed to do something exceptional';
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        setError(errorMessage);
        console.log(errorMessage);
      }
    };
    getCarts();
  }, []);

  return { carts, error };
};

export default useCarts;
