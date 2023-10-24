import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

export const ACTIONS = {
    SET_USER: 'set user'
}

const userReducer = (currentUser, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...currentUser,
        user: action.payload,
      };
    default:
      return currentUser;
  }
};

export const UserProvider = ({ children }) => {
  const [currentUser, dispatch] = useReducer(userReducer, {user: null});

  return (
    <UserContext.Provider value={{ currentUser, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
