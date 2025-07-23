import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const [showsearch, setshowsearch] = useState(false);
    const value = {
        products,
        currency: '$',
        delivery_fees: 10,
        search,
        setSearch,      
        showsearch,
        setshowsearch
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
