import { useState } from 'react';
import CartItem from '../components/CartItem';
import Loading from '../components/Loading/Loading';
import { useCartsContext } from '../context/CartsContext';

export const Carts = () => {
  const { carts, error, products } = useCartsContext();

  console.log(products);

  if (error) {
    return <div>{error}</div>;
  }

  if (!carts.length) {
    return <Loading />;
  }

  return (
    <main className="container-wrap">
      <h1>
        <span className="text-4xl ">List of carts</span>
      </h1>
      <h2 className="pt-4">
        <span className="text-xl text-black/50">Total: {carts.length}</span>
      </h2>
      <section className="flex flex-col gap-10 py-5">
        {carts.map((cart) => (
          <CartItem
            key={cart.id}
            id={cart.id}
            products={cart.products}
            total={cart.total}
            discountedTotal={cart.discountedTotal}
            userId={cart.userId}
            totalProducts={cart.totalProducts}
            totalQuantity={cart.totalQuantity}
          />
        ))}
      </section>
    </main>
  );
};
