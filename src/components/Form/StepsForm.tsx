import { useState } from 'react';
import { useCartsContext } from '../../context/CartsContext';
import { Cart } from '../../ts';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import Error from './Error';

interface Props {
  handelClose: () => void;
}

const StepsForm = ({ handelClose }: Props) => {
  type Step = 1 | 2 | 3;

  const { carts, products, setCarts } = useCartsContext();
  const [step, setStep] = useState<Step>(1);
  const [error, setError] = useState('');

  const [cart, setCart] = useState<Cart>({
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  });

  console.log(cart.products);

  const addCart = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: cart.id,
          userId: cart.userId,
          products: cart.products,
        }),
      });
      const data = await response.json();
      console.log(data);
      setCarts([...carts, data]);
      handelClose();
    } catch (error) {
      const errorMessage = 'Failed to add cart';
      // console.log(error.message);
      setError(errorMessage);
    }
  };

  return (
    <div className="relative">
      <h3>
        Total: <span className="">{cart.discountedTotal} </span>
        <span className="line-through text-black/50">{cart.total} </span>
      </h3>
      <h3>
        Total products: <span className="">{cart.totalProducts} </span>
      </h3>
      <h3>
        Total quantity: <span className="">{cart.totalQuantity} </span>
      </h3>
      {step === 1 && (
        <StepOne
          onSubmit={(values) => {
            console.log(values);
            const cartExists = carts.find((cart) => cart.id === values.id);
            if (cartExists) {
              setError('Cart already exists');
            }
            if (!cartExists) {
              setCart({
                ...cart,
                id: values.id,
                userId: values.useId,
              });
              setStep(2);
              setError('');
            }
          }}
        />
      )}
      {step === 2 && (
        <StepTwo
          products={products}
          setCart={setCart}
          cart={cart}
          onSubmit={() => {
            if (!cart.products.length) {
              setError('Cart is empty');
            }
            if (cart.products.length) {
              setStep(3);
              setError('');
            }
          }}
        />
      )}
      {step === 3 && (
        <StepThree onSubmit={addCart} products={cart.products}></StepThree>
      )}
      {error && <Error onClose={() => setError('')}>{error}</Error>}
      <div className="flex items-center text-black/60 text-sm justify-end pt-2">
        <h3>Step {step}/3</h3>{' '}
      </div>
    </div>
  );
};

export default StepsForm;
