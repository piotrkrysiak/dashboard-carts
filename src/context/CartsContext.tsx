import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Cart, Product } from '../ts';

interface State {
  carts: Cart[];
  setCarts: (value: Cart[]) => void;
  products: Product[];
  setProducts: (value: Product[]) => void;
  error: string;
  setError: (value: string) => void;
}

enum ActionType {
  SET_CARTS = 'SET_CARTS',
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_ERROR = 'SET_ERROR',
}

type Action =
  | {
      type: ActionType.SET_CARTS;
      value: Cart[];
    }
  | {
      type: ActionType.SET_PRODUCTS;
      value: Product[];
    }
  | {
      type: ActionType.SET_ERROR;
      value: string;
    };

const initialState: State = {
  carts: [],
  setCarts: () => {},
  products: [],
  setProducts: () => {},
  error: '',
  setError: () => {},
};

const cartsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CARTS':
      return { ...state, carts: action.value };
    case 'SET_PRODUCTS':
      return { ...state, products: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.value };
    default:
      return state;
  }
};

interface ContextStore {
  carts: Cart[];
  setCarts: (value: Cart[]) => void;
  products: Product[];
  setProducts: (value: Product[]) => void;
  error: string;
  setError: (value: string) => void;
  dispatch: React.Dispatch<Action>;
}

export const CartsContext = createContext<State>(initialState);

interface Props {
  children: ReactNode;
}

export const CartsContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartsReducer, initialState);

  const CartsContextStore: ContextStore = {
    carts: state.carts,
    setCarts: (value: Cart[]) =>
      dispatch({ type: ActionType.SET_CARTS, value }),
    products: state.products,
    setProducts: (value: Product[]) =>
      dispatch({ type: ActionType.SET_PRODUCTS, value }),
    error: state.error,
    setError: (value: string) =>
      dispatch({ type: ActionType.SET_ERROR, value }),
    dispatch,
  };

  return (
    <CartsContext.Provider value={CartsContextStore}>
      {children}
    </CartsContext.Provider>
  );
};

export const useCartsContext = () => useContext(CartsContext);
