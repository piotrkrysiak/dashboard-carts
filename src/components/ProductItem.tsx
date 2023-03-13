import { Product } from '../ts';

const ProductItem = ({
  id,
  title,
  price,
  quantity,
  total,
  discountPercentage,
  discountedPrice,
}: Product) => {
  return (
    <div className={`product-item product-item-${id}`}>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {total}</p>
      <p>Discount Percentage: {discountPercentage}</p>
      <p>Discounted Price: {discountedPrice}</p>
    </div>
  );
};

export default ProductItem;
