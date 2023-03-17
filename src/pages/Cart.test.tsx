import { render, screen } from '@testing-library/react';
import { CartsContext } from '../context/CartsContext';
import CartPage from './Cart';

describe('Cart component', () => {
  it('Renders the loading state when the cart data is not available', () => {
    render(<CartPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Renders the error message when there is an error fetching the cart data', () => {
    const error = 'Error fetching cart data';
    const { getByText } = render(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <CartsContext.Provider value={{ error }}>
        <CartPage />
      </CartsContext.Provider>
    );

    expect(getByText(error)).toBeInTheDocument();
  });
});
