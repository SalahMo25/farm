import { createContext, useContext, useEffect, useState } from "react";

import axios from 'axios';


export const ShoppingCartContext = createContext({});

export const productContext = createContext(0)
const initialCartItems = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [];






export const CartContextProvider = ({ children }) => {
  
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [dataProduct, setdataProduct] = useState([]);

    async function getProduct() {
        let { data } = await axios.get('https://smartfarm.almostafabure.com/api/Harvest')
        console.log(data.data);

        setdataProduct(data.data)
    }

  

    useEffect(() => {

        getProduct();
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));

        console.log('component did mount')
    }, [cartItems]);

   
    //بتحدد كميه العناصر ف الكارت
    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };


    const removeFromCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    };

    return (
        <ShoppingCartContext.Provider value={{ dataProduct, getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            
            
            cartItems, }} >
            {children}
        </ShoppingCartContext.Provider>
    )

}

export default CartContextProvider;



export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};