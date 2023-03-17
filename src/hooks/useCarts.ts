import { useEffect } from 'react';
import { useCartsContext } from '../context/CartsContext';
import { Cart, Product, RootObject } from '../ts';

const useCarts = () => {
  const { setError, setCarts, setProducts } = useCartsContext();

  const mapProducts = (carts: Cart[]) => {
    const uniqueProducts = new Set<number>();
    const tempProducts: Product[] = [];

    carts.forEach((cart) => {
      cart.products.forEach((product) => {
        if (!uniqueProducts.has(product.id)) {
          uniqueProducts.add(product.id);
          tempProducts.push(product);
        }
      });
    });

    setProducts(tempProducts.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/cart');
        const data: RootObject = await res.json();
        setCarts(data.carts);
        mapProducts(data.carts);
      } catch (err) {
        let errorMessage = 'Failed to do something exceptional';
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        setError(errorMessage);
      }
    };

    getCarts();
  }, []);
};

export default useCarts;
