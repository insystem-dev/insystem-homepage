'use client'

import React, { useReducer } from 'react';

const initialState = {
  isOpen: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'MOUSEOVER':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
export const DrawerContext = React.createContext({});

export const DrawerProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
