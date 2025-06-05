import { useState, useEffect, useContext } from "react"
import TarjetaMenu from "./tarjeta_menu"
import { Context } from "../context/Contex";

const Products = ({url}) => {

    const [menuData, setMenuData] = useState({}); // Alamacenará los datos completos del menú 
    const [loading, setLoading] = useState(true); // loading Indica si los datos se están cargando
    const [error,setError] = useState(null); // error Almacena cualquier mensaje de error que ocurra
    
    const {carrito, setCart} = useContext(Context);
    
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
    }

    /*
    Muestra mensajes según el estado de carga
    Previene errores si los datos no están disponibles
    */
   
   if (loading) return <div>Cargando productos...</div>;
   if (error) return <div>Error: {error}</div>;
   if (!menuData.comidas) return <div>No hay datos disponibles</div>;
   
   
   /* 
   Combina todos los productos de todas las categorías 
   en un solo array
   Usa || [] como fallback si alguna categoría no existe
   */
  
  const allProducts = [
    ...(menuData.comidas || []),
    ...(menuData.bebidas || []),
    ...(menuData.postres || [])
  ];
  

  
  return (
    <div>
      <h2 id="comidas" className="etiqueta-seccion">Comidas</h2>
      <div className="contenedor-productos">
        {menuData.comidas?.map((product) => (
          <TarjetaMenu key={product.id} {...product} onAddToCart ={ buyProducts}/>
        ))}
      </div>

      <h2 id="bebidas" className="etiqueta-seccion">Bebidas</h2>
      <div className="contenedor-productos">
        {menuData.bebidas?.map((product) => (
          <TarjetaMenu key={product.id} {...product} onAddToCart ={ buyProducts}/>
        ))}
      </div>

      <h2 id="postres" className="etiqueta-seccion">Postres</h2>
      <div className="contenedor-productos">
        {menuData.postres?.map((product) => (
          <TarjetaMenu key={product.id} {...product} onAddToCart ={ buyProducts} />
        ))}
      </div>
    </div>
  );
};

export default Products;