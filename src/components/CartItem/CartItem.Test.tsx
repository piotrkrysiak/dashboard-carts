import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItem from './CartItem';
import { vi, describe, it } from 'vitest';
import { CartsContextProvider } from '../../context/CartsContext';

describe('CartItem component', () => {
  const carts = [
    {
      id: 1,
      products: [],
      total: 10,
      discountedTotal: 8,
      userId: 1,
      totalProducts: 2,
      totalQuantity: 5,
    },
    {
      id: 2,
      products: [],
      total: 20,
      discountedTotal: 18,
      userId: 2,
      totalProducts: 3,
      totalQuantity: 7,
    },
  ];

  const setCarts = vi.fn();

  const renderCartItem = (id: number) =>
    render(
      <CartsContextProvider>
        <BrowserRouter>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <CartItem {...carts.find((cart) => cart.id === id)} />
        </BrowserRouter>
      </CartsContextProvider>
    );

  it('Renders cart item details correctly', () => {
    const { getByText, getByTestId } = renderCartItem(1);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByTestId('cart-1')).toHaveAttribute('href', '/carts/1');
  });

  it('Deletes cart item when delete button is clicked', () => {
    const { getByRole } = renderCartItem(1);
    fireEvent.click(getByRole('button'));
    expect(setCarts).toHaveBeenCalledWith([carts[1]]);
  });
});
