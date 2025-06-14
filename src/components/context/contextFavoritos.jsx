import { createContext, useState } from "react";

export const contextFavoritos = createContext();

const ContextProviderFavoriteProduct = ({children}) =>{

    const [favorito, setFavorite] = useState([])

    return(
        <contextFavoritos.Provider value={{favorito,setFavorite}}>
            {children}
        </contextFavoritos.Provider>
    )

}

export default ContextProviderFavoriteProduct;