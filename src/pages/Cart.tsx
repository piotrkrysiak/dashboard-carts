import { useParams } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();

  return <div>Cart {id}</div>;
};

export default Cart;
