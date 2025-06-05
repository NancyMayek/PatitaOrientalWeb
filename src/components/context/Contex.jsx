import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({children}) =>{

    const [carrito, setCart] = useState([])

    return(
        <Context.Provider value={{carrito,setCart}}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider;