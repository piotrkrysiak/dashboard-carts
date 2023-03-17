import { Link } from 'react-router-dom';
import { useCartsContext } from '../../context/CartsContext';
import { Product } from '../../ts';

interface Props {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

const CartItem = ({
  products,
  id,
  total,
  discountedTotal,
  userId,
  totalProducts,
  totalQuantity,
}: Props) => {
  const { carts, setCarts } = useCartsContext();

  const deleteCart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newCarts = carts.filter((cart) => cart.id !== id);
    setCarts(newCarts);
  };

  return (
    <Link
      id={`cart-${id}`}
      to={`/carts/${id}`}
      className="bg-white relative rounded-xl py-5 px-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 items-center justify-between flex-wrap"
      state={{ products }}
    >
      <CartIcon />
      <Column description="Id">{id}</Column>
      <Column description="Total">{total}</Column>
      <Column description="Discounted Total">{discountedTotal}</Column>
      <Column description="User ID">{userId}</Column>
      <Column description="Total Products">{totalProducts}</Column>
      <Column description="Total Quantity">{totalQuantity}</Column>
      <div
        onClick={deleteCart}
        className="absolute top-5 right-4 lg:relative flex justify-end pr-2 lg:pr-4 lg:top-[unset] lg:right-[unset]"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            fill="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.293 5.293C5.683 4.902 6.316 4.902 6.707 5.293L12 10.586L17.293 5.293C17.684 4.902 18.316 4.902 18.707 5.293C19.098 5.683 19.098 6.316 18.707 6.707L13.414 12L18.707 17.293C19.098 17.684 19.098 18.316 18.707 18.707C18.316 19.098 17.684 19.098 17.293 18.707L12 13.414L6.707 18.707C6.316 19.098 5.683 19.098 5.293 18.707C4.902 18.316 4.902 17.684 5.293 17.293L10.586 12L5.293 6.707C4.902 6.316 4.902 5.683 5.293 5.293Z"
          />
        </svg>
      </div>
    </Link>
  );
};

export default CartItem;

interface ColumnProps {
  children: React.ReactNode;
  description: string;
}

const Column = ({ children, description }: ColumnProps) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg lg:text-xl">{children}</span>
      <span className="text-sm text-black/50">{description}</span>
    </div>
  );
};

const CartIcon = () => (
  <svg
    width="100%"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-auto"
  >
    <g filter="url(#filter0_i_2_39)">
      <path
        d="M4.02155 10.5625C3.33405 10.5625 2.7778 11.125 2.7778 11.8125C2.7778 12.5 3.33405 13.0625 4.02155 13.0625C4.70905 13.0625 5.27155 12.5 5.27155 11.8125C5.27155 11.125 4.70905 10.5625 4.02155 10.5625ZM10.2715 10.5625C9.58405 10.5625 9.0278 11.125 9.0278 11.8125C9.0278 12.5 9.58405 13.0625 10.2715 13.0625C10.959 13.0625 11.5215 12.5 11.5215 11.8125C11.5215 11.125 10.959 10.5625 10.2715 10.5625ZM4.70905 7.4375H9.3653C9.83405 7.4375 10.2465 7.18125 10.459 6.79375L12.484 2.95625C12.6403 2.65625 12.534 2.28125 12.234 2.11875C11.9278 1.95 11.5465 2.06875 11.384 2.375L9.3653 6.1875H4.9778L2.3153 0.5625H0.896545C0.552795 0.5625 0.271545 0.84375 0.271545 1.1875C0.271545 1.53125 0.552795 1.8125 0.896545 1.8125H1.52155L3.77155 6.55625L2.9278 8.08125C2.47155 8.91875 3.07155 9.9375 4.02155 9.9375H10.8965C11.2403 9.9375 11.5215 9.65625 11.5215 9.3125C11.5215 8.96875 11.2403 8.6875 10.8965 8.6875H4.02155L4.70905 7.4375Z"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_2_39"
        x="0.271545"
        y="0.5625"
        width="12.2842"
        height="12.5"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.5" dy="0.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.2 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_39" />
      </filter>
    </defs>
  </svg>
);
