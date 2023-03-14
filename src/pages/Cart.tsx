import { useParams } from 'react-router-dom';

export const Cart = () => {
  const { id } = useParams();

  return <div>Cart {id}</div>;
};
