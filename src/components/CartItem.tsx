import { Product } from "../ts";
import ProductItem from "./ProductItem";

interface Props {
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

const CartItem = ({
  products,
  total,
  discountedTotal,
  userId,
  totalProducts,
  totalQuantity,
}: Props) => {
  return (
    <div>
      <h1>Cart</h1>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          total={product.total}
          discountPercentage={product.discountPercentage}
          discountedPrice={product.discountedPrice}
        />
      ))}
      <h2>Total: {total}</h2>
      <h2>Discounted Total: {discountedTotal}</h2>
      <h2>User ID: {userId}</h2>
      <h2>Total Products: {totalProducts}</h2>
      <h2>Total Quantity: {totalQuantity}</h2>
    </div>
  );
};

export default CartItem;
