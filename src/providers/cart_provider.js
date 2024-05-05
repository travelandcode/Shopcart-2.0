import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from './user_provider';


export const CartContext = createContext({
  cartProducts: [],
  getProductQuantity: () => {},
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  clearClart: () => {}
})

export function useCart() {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartUpdated,setIsCartUpdated] = useState(false)
  const {currentUser} = useUser()

  useEffect(() => {
    if(isCartUpdated){
      if (currentUser) {
        updateUserCart(cartProducts);
      }
      else
      {
        sessionStorage.setItem('cart', JSON.stringify(cartProducts));
      }
    }
    setIsCartUpdated(false);
  }, [cartProducts, isCartUpdated, currentUser]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart'))
    if(storedCart){
      setCartProducts(storedCart)
    }
    else{
      fetchUserCart()
    }
  }, [currentUser])

  const fetchUserCart = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/cart`, {
        method: 'GET',
        credentials: 'include'
      })
      const result = await response.json()
      const cart = result.data
      if(cart.length === 0) return
      setCartProducts(cart)
    } catch (error) {
      console.error(error)
    }
  }

  const updateUserCart = async(cartProducts) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user/cart/update`,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({cartProducts}),
          credentials: 'include'
        }
      )
      const result = response.json()
      const cart = result.data
      if(!cart) return
      setCartProducts(cart)
    } catch (error) {
        console.error(error)
    }
  }

  function getProductQuantity(id) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  async function increaseCartQuantity(id) {
    setCartProducts((currentProducts) => {
      if (currentProducts.find((product) => product.id === id) == null) {
        return [...currentProducts, { id, quantity: 1 }];
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    })
    setIsCartUpdated(true)
  }

  function decreaseCartQuantity(id) {
    setCartProducts((currentProducts) => {
      if (currentProducts.find((product) => product.id === id)?.quantity === 1) {
        return currentProducts.filter((product) => product.id !== id);
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
    setIsCartUpdated(true)
  }

  function removeFromCart(id) {
    setCartProducts(currentProducts =>{
       return currentProducts.filter(product => product.id !== id)
    });
    setIsCartUpdated(true)
  }

  function clearCart() {
    localStorage.setItem("cartProducts",JSON.stringify([]))
    setCartProducts([])
    setIsCartUpdated(true)
  }

  return (
    <CartContext.Provider value={{
      getProductQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      clearCart,
      cartProducts
    }}>{children}</CartContext.Provider>
  )

 
}


