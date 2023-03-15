/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Cart } from '../ts';

interface State {
  carts: Cart[];
  setCarts: (value: Cart[]) => void;
}

enum ActionType {
  SET_CARTS = 'SET_CARTS',
}

type Action = {
  type: ActionType;
  value: Cart[];
};

const initialState: State = {
  carts: [],
  setCarts: () => {},
};

const cartsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CARTS':
      return { ...state, carts: action.value };
    default:
      return state;
  }
};

interface ContextStore {
  carts: Cart[];
  setCarts: (value: Cart[]) => void;
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
    dispatch,
  };

  return (
    <CartsContext.Provider value={CartsContextStore}>
      {children}
    </CartsContext.Provider>
  );
};

export const useCartsContext = () => useContext(CartsContext);
