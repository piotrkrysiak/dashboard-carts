import CartItem from '../components/CartItem';
import Loading from '../components/Loading/Loading';
import { useCartsContext } from '../context/CartsContext';

const Carts = () => {
  const { carts, error } = useCartsContext();

  if (error) {
    return <div>{error}</div>;
  }

  if (!carts.length) {
    return <Loading />;
  }

  return (
    <main className="container-wrap">
      <h1 className="text-2xl lg:text-4xl">List of carts</h1>
      <h2 className="pt-4">
        <span className="text-xl text-black/50">Total: {carts.length}</span>
      </h2>
      <section className="flex flex-col gap-4 lg:gap-8 py-5">
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

export default Carts;
