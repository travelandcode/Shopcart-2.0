import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext({
  getUser: () => {}
})

export function useUser() {
  return useContext (UserContext)
}

export const UserProvider = ({children}) =>{
  const [currentUser, setUser] = useState(null)

  async function getUser(){
    try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
        
      })
      const result =  await response.json()
      console.log(result)
      if(result.user) setUser(result.user)
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() =>{
    getUser()
  },[])

    return (
    <UserContext.Provider value={{ currentUser}}>
      {children}
    </UserContext.Provider>
  );
}





