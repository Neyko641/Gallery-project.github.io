import React, { createContext, useState, useContext } from 'react';

const defaultState = {
  user: {},
};

export const UserContext = createContext(defaultState);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultState.user);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};