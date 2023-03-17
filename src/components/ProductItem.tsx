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
    <div className={`product-item product-item-${id} bg-white p-6 rounded-xl`}>
      <h3 className="text-primary font-bold">{title}</h3>
      <p className="font-bold">Id: {id}</p>
      <p>Price: {price}$</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {total}</p>

      <p>Discount: {discountPercentage}%</p>
      <p>
        Discounted Price:{' '}
        {Math.round((discountedPrice / quantity + Number.EPSILON) * 100) / 100}$
      </p>
      <p>Discounted Total: {discountedPrice}$</p>
    </div>
  );
};

export default ProductItem;
