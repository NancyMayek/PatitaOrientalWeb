import { useState, useEffect, useContext } from "react";
import TarjetaMenu from "./tarjetaMenu";
import {useCartActions} from "../utils/botonDeAgregar"


const TopProducts = ({url}) => {

    const [menuData, setMenuData] = useState({}); // Alamacenará los datos completos del menú 
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    const {handleAddToCart} = useCartActions();


  const getTopThreeGlobal = () => {
    if (!products || products.length === 0) return [];
    
    // Ordenamos por contador (de mayor a menor) y tomamos los 3 primeros
    return products
      .filter(product => product.isActive) // Solo productos activos
      .sort((a, b) => (b.contador || 0) - (a.contador || 0))
      .slice(0, 3);
  };

    

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        
        // Transformar los datos si es necesario
        const transformedProducts = Array.isArray(data) ? data : data.menu ? 
          [...data.menu.comidas, ...data.menu.bebidas, ...data.menu.postres] : [];
        
        setProducts(transformedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;



    const topThreeGlobal = getTopThreeGlobal();

    return (

      <div>
        <div className="contenedor-productos">
          {topThreeGlobal.map((product) => (
            <TarjetaMenu
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    );
}

export {TopProducts};