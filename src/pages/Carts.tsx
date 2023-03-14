import CartItem from '../components/CartItem';
import Container from '../components/Container';
import useCarts from '../hooks/useCarts';

export const Carts = () => {
  const { carts, error } = useCarts();

  if (error) {
    return <div>{error}</div>;
  }

  if (!carts.length) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mx-auto flex flex-col gap-10 py-10">
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
    </Container>
  );
};
