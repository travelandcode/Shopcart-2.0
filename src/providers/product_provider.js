import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { api } from '../service/axios';
// Create a context
const ProductContext = createContext({});

export function useProduct() {
    return useContext(ProductContext)
}

export function ProductProvider({children}) {
    const [storeProducts, setProducts] = useState(() =>{
        const products = localStorage.getItem("products")
        return products ? JSON.parse(products): []
    })
    const productRef = useRef(false)

    useEffect(() =>{
        localStorage.setItem("products",JSON.stringify(storeProducts));
      },[storeProducts])
    useEffect(() =>  {
        if(productRef.current === false){
            api.get('/products')
                .then(res =>{
                    setProducts(res.data)
                    localStorage.setItem("products",JSON.stringify(res.data))
                }).catch(error=>{
                    console.log(error)
                })
        }
        return () => {
            productRef.current = true
        }
    }, []);
    
      return <ProductContext.Provider value={{ storeProducts }}>{children}</ProductContext.Provider>; 
}