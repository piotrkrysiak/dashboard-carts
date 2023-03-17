import { useEffect, useState } from 'react';
import { Cart, Product } from '../../ts';
import Button from '../Button';
import Icon from './Icon';

interface Props {
  products: Product[];
  setCart: (value: Cart) => void;
  cart: Cart;
  onSubmit: () => void;
}

const StepTwo = ({ products, onSubmit, cart, setCart }: Props) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleCheckboxChange = (product: Product) => {
    const productExists = selectedProducts.find((p) => p.id === product.id);
    if (productExists) {
      const filteredProducts = selectedProducts.filter(
        (p) => p.id !== product.id
      );
      setSelectedProducts(filteredProducts);
      return;
    }
    setSelectedProducts([...selectedProducts, product]);
  };

  useEffect(() => {
    setCart({
      ...cart,
      products: selectedProducts,
      totalProducts: selectedProducts.length,
      totalQuantity: selectedProducts.reduce((acc, product) => {
        return acc + product.quantity;
      }, 0),
      discountedTotal: selectedProducts.reduce((acc, product) => {
        return acc + product.discountedPrice;
      }, 0),
      total: selectedProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0),
    });
  }, [selectedProducts]);

  return (
    <div>
      <div className="flex flex-col gap-4 overflow-auto max-h-256 my-4">
        {products.map((product) => (
          <label
            key={product.id}
            className="flex gap-2 items-center cursor-pointer"
          >
            <input
              type="checkbox"
              className="w-5 h-5 accent-primary"
              checked={selectedProducts.some((p) => p.id === product.id)}
              onChange={() => handleCheckboxChange(product)}
            />
            <div className="grid grid-cols-12 gap-4 items-center w-full">
              <p className="col-span-5 font-bold">{product.title}</p>
              <p className="col-span-2">{product.price}$</p>
              <p className="col-span-2">{product.total}$</p>
              <p className="col-span-2">{product.discountedPrice}$</p>
              <p className="col-span-1">{product.quantity}</p>
            </div>
          </label>
        ))}
      </div>
      <Button onClick={onSubmit} className="ml-auto">
        <Icon />
      </Button>
    </div>
  );
};

export default StepTwo;
