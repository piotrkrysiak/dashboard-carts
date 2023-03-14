import { useEffect, useState } from 'react';
import { Cart, RootObject } from '../ts';

const useCarts = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [error, setError] = useState('');

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

  useEffect(() => {
    getCarts();
  }, []);

  return { carts, error };
};

export default useCarts;
