import { useEffect, useState } from 'react';
import CartItem from './components/CartItem';
import Container from './components/Container';
import { Cart, RootObject } from './ts';

export const App = () => {
  const [cards, setCards] = useState<Cart[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await fetch('https://dummyjson.com/cart');
        const data: RootObject = await res.json();
        setCards(data.carts);
      } catch (err) {
        let errorMessage = 'Failed to do something exceptional';
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        setError(errorMessage);
        console.log(errorMessage);
      }
    };

    getCards();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!cards.length) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mx-auto flex flex-col gap-10 py-10">
      {cards.map((card) => (
        <CartItem
          key={card.id}
          id={card.id}
          products={card.products}
          total={card.total}
          discountedTotal={card.discountedTotal}
          userId={card.userId}
          totalProducts={card.totalProducts}
          totalQuantity={card.totalQuantity}
        />
      ))}
    </Container>
  );
};
