import React, { createContext, useContext, useEffect, useState} from 'react';
// Create a context
export const ProductContext = createContext({
    storeProducts: [],
    fetchProducts: () => {}
})

export function useProduct() {
    return useContext(ProductContext)
}


export const ProductProvider = ({children}) => {
    const [storeProducts, setProducts] = useState([])

      const fetchProducts = async() => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/products/`)
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status} - ${response.statusText}`);
            }
            const result = await response.json()
            setProducts(result.data)
            sessionStorage.setItem("products",JSON.stringify(result.data))
        } catch (error) {
            console.error('Error fetching products:', error.message)
        }
    }

    useEffect(() => {
        const products = JSON.parse(sessionStorage.getItem("products"))
        if(products){
            setProducts(products)
            console.log("HIT")
        }
        else{
            fetchProducts()
        }
    }, [])
    return <ProductContext.Provider value={{ storeProducts, fetchProducts }}>{children}</ProductContext.Provider>
}