import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};


export function UserProvider ({ children }) {
  const [currentUser, setUser] = useState(null)

  async function fetchUser() {       
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/user`);
      const result =  await response.json()
      setUser(result.user)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchUser();
  });

  return (
    <UserContext.Provider value={{ currentUser}}>
      {children}
    </UserContext.Provider>
  );
};





