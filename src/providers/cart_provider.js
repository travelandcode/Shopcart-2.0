import React, { createContext, useContext, useEffect, useState } from 'react';


export const CartContext = createContext({
  cartProducts: [],
  getProductQuantity: () => {},
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {}
})

export function useCart() {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : []
  );

  useEffect(() =>{
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
  },[cartProducts])

  useEffect(() => {
    try{
      const cartProducts = localStorage.getItem("cartProducts"); // populates cart with local storage object
      if (cartProducts) {
        setCartProducts(JSON.parse(cartProducts));
      }
    }catch(error){
      console.error(error)
    }
    
  },[]);

  function getProductQuantity(id) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
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
    });
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
  }

  function removeFromCart(id) {
    setCartProducts(currentProducts =>{
       return currentProducts.filter(product => product.id !== id)
    });
  }

  return (
    <CartContext.Provider value={{
      getProductQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartProducts
    }}>{children}</CartContext.Provider>
  )

 
}


