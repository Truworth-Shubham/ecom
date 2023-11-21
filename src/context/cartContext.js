import { createContext, useState } from "react";

export const Store = createContext();

const ContextApi = ({ children }) => {

    const [cartData, setCartData] = useState([]);

    return (
        <Store.Provider value={{ cartData, setCartData }}>
            {children}
        </Store.Provider>
    )
}
export default ContextApi

