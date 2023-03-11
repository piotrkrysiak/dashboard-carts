import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import { Cart, RootObject } from "./ts";

export const App = () => {
  const [cards, setCards] = useState<Cart[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await fetch("https://dummyjson.com/cart");
        const data: RootObject = await res.json();
        setCards(data.carts);
      } catch (err) {
        let errorMessage = "Failed to do something exceptional";
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
    <div>
      {cards.map((card) => (
        <CartItem
          key={card.id}
          products={card.products}
          total={card.total}
          discountedTotal={card.discountedTotal}
          userId={card.userId}
          totalProducts={card.totalProducts}
          totalQuantity={card.totalQuantity}
        />
      ))}
    </div>
  );
};
