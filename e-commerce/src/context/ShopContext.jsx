import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext()

// Move outside component to prevent recreation
const contextValue = {
    products,
    currency: '$',
    delivery_fees: 10
};

const ShopContextProvider = (props) => {
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
