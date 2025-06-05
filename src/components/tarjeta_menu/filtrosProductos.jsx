import { useState, useEffect, useContext } from "react";
import TarjetaMenu from "./tarjeta_menu";
import { Context } from "../context/Contex";

const TopProducts = ({url}) => {

    const [menuData, setMenuData] = useState({}); // Alamacenará los datos completos del menú 
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    const {carrito, setCart} = useContext(Context); 

    const getTopThreeGlobal = () => {
        if (!menuData.comidas || !menuData.bebidas || !menuData.postres) return [];
        
        // Combinamos todos los productos en un solo array
        const allProducts = [
            ...menuData.comidas,
            ...menuData.bebidas,
            ...menuData.postres
        ];

        // Ordenamos por contador (de mayor a menor) y tomamos los 3 primeros
        return allProducts
            .sort((a, b) => b.contador - a.contador)
            .slice(0, 3);
    };

    

       useEffect(() =>{
      const fetchProducts = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                  }
                  const data = await response.json();
                  setMenuData(data.menu); // Accedemos a data.menu
                } catch (err) {
                  setError(err.message);
                } finally {
                  setLoading(false); // El finally asegura que loading se cambie a false siempre
            }
        };
        fetchProducts();
    }, [url]);

    const buyProducts = (product) => {
      setCart([...carrito, product])
    };


    const topThreeGlobal = getTopThreeGlobal();

    return (

      <div>
        <div className="contenedor-productos">
          {topThreeGlobal.map((product) => (
            <TarjetaMenu
              key={product.id}
              {...product}
              onAddToCart={buyProducts}
            />
          ))}
        </div>
      </div>
    );
}

export {TopProducts};