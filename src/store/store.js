import { createContext, useReducer } from 'react';

import reducer from './reducer';

import { NEW_COMPONENT } from './constants';

const initialState = {
  name: NEW_COMPONENT
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
