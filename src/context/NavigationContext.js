import React, { createContext, useContext, useReducer } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ reducer, initialState, children }) => (
  <NavigationContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </NavigationContext.Provider>
);

export const useNavigationValue = () => useContext(NavigationContext);
