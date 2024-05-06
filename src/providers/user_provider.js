import React, { createContext, useContext, useEffect, useState } from 'react';

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

  const localSignUp = async (name,email,password) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name,email,password}),
        credentials: 'include'
    })
    if(response.status === 201) return {response:"User was created"}
    if(response.status === 409) return {response:"User was already exists"}
    return {response:"User was not created"}
  }

  const localSignIn = async (email,password) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email,password}),
        credentials: 'include'
      })
      const result = response.json()
      if(response.ok) {
        setUser(result.data)
        return "User successfully signed in"
      }
      return  "User cannot signin"
   } catch (error) {
      console.error(error)
   }
  }

  const googleSignIn = async () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`  
  }

  const signOut = async () => {
    try{
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
          method: 'GET',
          headers: {'Content-Type':'application/json'},
          credentials: 'include'
      })
      if(response.ok){
         return "Signed Out"
      }
    }catch(error){
        console.log(error)
    }
  }

  const fetchUser = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
        method: 'GET',
        credentials: "include"
      })
      const result =  await response.json()
      sessionStorage.setItem("user",JSON.stringify(result.data))
      setUser(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const user = sessionStorage.getItem("user")
      if(user){
        setUser(JSON.parse(user))
      }
      else{
        fetchUser()
      }
  },[])

  return (
    <UserContext.Provider value={{ currentUser, localSignUp, localSignIn, fetchUser, googleSignIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};





