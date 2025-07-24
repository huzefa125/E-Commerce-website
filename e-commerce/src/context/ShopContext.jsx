import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const [showsearch, setshowsearch] = useState(false);
    const [cartItem, setCartItems] = useState({});
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        
        let cartData = structuredClone(cartItem);
        
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        
        setCartItems(cartData);
        toast.success('Item added to cart!');
    }

   
    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        
        if (quantity <= 0) {
            if (cartData[itemId] && cartData[itemId][size]) {
                delete cartData[itemId][size];
               
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
       
            if (cartData[itemId]) {
                cartData[itemId][size] = quantity;
            }
        }
        
        setCartItems(cartData);
        toast.success('Cart updated successfully!');
    };
    const removeFromCart = (itemId, size) => {
        let cartData = structuredClone(cartItem);
        
        if (cartData[itemId] && cartData[itemId][size]) {
            delete cartData[itemId][size];
            
           
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
            
            setCartItems(cartData);
            toast.success('Item removed from cart!');
        }
    };

    const getCardCount = () => {
        let totalCount = 0;
        
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]; 
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        
        return totalCount;
    }

    const value = {
        products,
        currency: '$',
        delivery_fees: 10,
        search,
        setSearch,      
        showsearch,
        setshowsearch,
        cartItem,
        setCartItems,
        addToCart,
        updateQuantity,   
        removeFromCart,   
        getCardCount,
        navigate,
    };

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
