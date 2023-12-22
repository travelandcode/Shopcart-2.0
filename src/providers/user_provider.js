import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();
let user =  []

export const ACTIONS = {
    SET_USER: 'set user'
}

async function fetchUser() {       
  try {
    const response = await fetch('http://localhost:3001/auth/user', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    user =  await response.json();
    return user.user
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function addUser(email,password) {
  try{
    const response = await fetch('http://localhost:3001/auth/signup',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password})
      }
    )

    if(response.status(201)){
      return "User has been created"
    }else{
      return "User already exists"
    }


  }catch(error){
    console.log(error)
  }
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
    <UserContext.Provider value={{ currentUser, dispatch, fetchUser}}>
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
