import { useState } from 'react';
import { useCartsContext } from '../../context/CartsContext';
import { Cart } from '../../ts';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const StepsForm = () => {
  type Step = 1 | 2 | 3;

  const { carts, products } = useCartsContext();

  const [step, setStep] = useState<Step>(1);

  const [cart, setCart] = useState<Cart>({
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  });

  return (
    <div>
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
              alert('Cart already exists');
              return;
            }
            if (!cartExists) {
              setCart({
                ...cart,
                id: values.id,
                userId: values.useId,
              });
              setStep(2);
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
            setStep(3);
          }}
        />
      )}
      {step === 3 && <StepThree products={cart.products}></StepThree>}
      <div className="flex items-center text-black/60 text-sm justify-end pt-2">
        <h3>Step {step}/3</h3>{' '}
      </div>
    </div>
  );
};

export default StepsForm;
