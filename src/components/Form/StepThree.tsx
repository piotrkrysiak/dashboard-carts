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
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex gap-2">
          <p>{product.title}</p>
          <p>{product.price}$</p>
          <p>{product.quantity}</p>
        </div>
      ))}
      <Button onClick={onSubmit}>
        <Icon />
      </Button>
    </div>
  );
};

export default StepThree;
