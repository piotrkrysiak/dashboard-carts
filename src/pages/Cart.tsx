import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { useCartsContext } from '../context/CartsContext';
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Loading } from '../components';

const Cart = () => {
  const { id } = useParams();

  const { carts, error } = useCartsContext();

  if (error) {
    return <div>{error}</div>;
  }

  const cart = carts.find((cart) => cart.id === Number(id));

  const productData = cart?.products.map((product) => {
    return {
      name: `Id: ${product.id}`,
      price: product.price,
      discountedPrice:
        Math.round(
          (product.discountedPrice / product.quantity + Number.EPSILON) * 100
        ) / 100,
    };
  });

  if (!cart) {
    return <Loading />;
  }

  return (
    <div className="container-wrap">
      <h1 className="text-2xl lg:text-4xl pb-3 lg:pb-4">Cart {id}</h1>
      <>
        <Subtitle>
          Total: <span className="">{cart.discountedTotal} </span>
          <span className="line-through text-black/50">{cart.total} </span>
        </Subtitle>
        <Subtitle>
          Total products: <span className="">{cart.totalProducts} </span>
        </Subtitle>
        <Subtitle>
          Total quantity: <span className="">{cart.totalQuantity} </span>
        </Subtitle>
      </>
      <Title>Products: </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {cart.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            total={product.total}
            discountPercentage={product.discountPercentage}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
      <Title>Price chart:</Title>
      <div className="max-w-screen-lg pb-8 mx-auto">
        <ResponsiveContainer
          width="100%"
          className="aspect-square sm:aspect-video"
        >
          <LineChart data={productData} margin={{ top: 40, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0}>
              <Label
                value="Products (U.S. Dollar)"
                offset={-8}
                position="insideBottomRight"
              />
            </XAxis>
            <YAxis dataKey="price">
              <Label value="Price" offset={20} position="top" />
            </YAxis>
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line
              type="monotone"
              name="Price"
              dataKey="price"
              stroke="#4339F2"
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              name="Discounted price"
              dataKey="discountedPrice"
              stroke="black"
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Cart;

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm lg:text-xl text-black/50">{children}</p>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-2xl lg:text-4xl pb-3 lg:pb-4 pt-5 lg:pt-8">{children}</p>
  );
};
