import { Product } from '../../ts';
import Button from '../Button';
import Icon from './Icon';

interface Props {
  products: Product[];
  onSubmit: () => void;
}

const StepThree = ({ products, onSubmit }: Props) => {
  console.log(products);

  return (
    <>
      <div className="py-4">
        Poducts:
        <div className="overflow-auto max-h-256">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-12 gap-4 items-center w-full"
            >
              <p className="col-span-5 font-bold">{product.title}</p>
              <p className="col-span-2">{product.price}$</p>
              <p className="col-span-2">{product.total}$</p>
              <p className="col-span-2">{product.discountedPrice}$</p>
              <p className="col-span-1">{product.quantity}</p>
            </div>
          ))}{' '}
        </div>
      </div>
      <Button onClick={onSubmit} className="ml-auto">
        <Icon />
      </Button>
    </>
  );
};

export default StepThree;
