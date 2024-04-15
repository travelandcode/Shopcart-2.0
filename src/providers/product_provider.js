import React, { createContext, useContext, useEffect, useState} from 'react';
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

    useEffect(() =>{
        localStorage.setItem("products",JSON.stringify(storeProducts));
    },[storeProducts])

    async function fetchProducts(){
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/products/`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status} - ${response.statusText}`);
            }
            
            const result = await response.json();
            setProducts(result.data)
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    
    return <ProductContext.Provider value={{ storeProducts }}>{children}</ProductContext.Provider>; 
}