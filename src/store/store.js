import { createContext, useReducer } from 'react';

import reducer from './reducer';

import { NEW_COMPONENT } from '../global';

const initialState = {
  right: {
    name: `${NEW_COMPONENT} #0`,
    attributes: []
  },
  left: {
    counter: 0,
    widgets: []
  }
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
