import { createContext, useState, useEffect } from "react";

export const contextFavoritos = createContext();

const ContextProviderFavoriteProduct = ({ children }) => {
  const [favorito, setFavorite] = useState(() => {
    const stored = localStorage.getItem("favoritos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favorito));
  }, [favorito]);

  return (
    <contextFavoritos.Provider value={{ favorito, setFavorite }}>
      {children}
    </contextFavoritos.Provider>
  );
};

export default ContextProviderFavoriteProduct;