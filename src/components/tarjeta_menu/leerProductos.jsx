import { useState, useEffect } from "react";
import TarjetaMenu from "./tarjetaMenu";
import "./tarjeta_menu.css";
import {useCartActions} from "../utils/botonDeAgregar";
import { useFavorito } from "../utils/agregarAFavoritos";


const Products = ({ url }) => {
  const [menuData, setMenuData] = useState({}); // Alamacenará los datos completos del menú
  const [loading, setLoading] = useState(true); // loading Indica si los datos se están cargando
  const [error, setError] = useState(null); // error Almacena cualquier mensaje de error que ocurra


  const {handleAddToCart} = useCartActions(); // Se llama la función de handleAddToCart de useCarActions 
  const {favoriteProducts} = useFavorito(); // Se manda a llamar la función de favoriteProducts de useFavorito
  
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const products = await response.json(); // Ahora es un array, no un objeto con "menu"

      // Clasificar productos del JSON por categoría (solo activos)
      const comidasFromJson = products.filter(
        (p) => p.categories.name === "Comida" && p.isActive
      );
      const bebidasFromJson = products.filter(
        (p) => p.categories.name === "Bebida" && p.isActive
      );
      const postresFromJson = products.filter(
        (p) => p.categories.name === "Postre" && p.isActive
      );

      // Leer productos desde localStorage
      const productosLocales = JSON.parse(localStorage.getItem("productos")) || [];

      // Clasificarlos por categoría
      const comidasExtra = productosLocales.filter(
        (p) => p.categoria === "comida"
      );
      const bebidasExtra = productosLocales.filter(
        (p) => p.categoria === "bebida"
      );
      const postresExtra = productosLocales.filter(
        (p) => p.categoria === "postre"
      );

      // Combinar productos del JSON + localStorage
      const menuFinal = {
        comidas: [...comidasFromJson, ...comidasExtra],
        bebidas: [...bebidasFromJson, ...bebidasExtra],
        postres: [...postresFromJson, ...postresExtra],
      };

      setMenuData(menuFinal);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, [url]);


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
    ...(menuData.postres || []),
  ];

  return (
    <div className="menu-contenedor">
      <h2 id="comidas" className="etiqueta-seccion">
        Comidas
      </h2>
      <div className="contenedor-productos">
        {menuData.comidas?.map((product) => (
          <TarjetaMenu
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
            onAddToFavorites={favoriteProducts}
          />
        ))}
      </div>

      <h2 id="bebidas" className="etiqueta-seccion">
        Bebidas
      </h2>
      <div className="contenedor-productos">
        {menuData.bebidas?.map((product) => (
          <TarjetaMenu
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
            onAddToFavorites={favoriteProducts}
          />
        ))}
      </div>

      <h2 id="postres" className="etiqueta-seccion">
        Postres
      </h2>
      <div className="contenedor-productos">
        {menuData.postres?.map((product) => (
          <TarjetaMenu
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
            onAddToFavorites={favoriteProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
