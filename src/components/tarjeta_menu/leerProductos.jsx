import { useState, useEffect, useContext } from "react";
import TarjetaMenu from "./tarjeta_menu";
import { Context } from "../context/Contex";
import { alertaAgregarAlCarrito } from "./alertaAgregarAlCarrito";
import "./tarjeta_menu.css";

const Products = ({ url }) => {
  const [menuData, setMenuData] = useState({}); // Alamacenará los datos completos del menú
  const [loading, setLoading] = useState(true); // loading Indica si los datos se están cargando
  const [error, setError] = useState(null); // error Almacena cualquier mensaje de error que ocurra

  const { carrito, setCart } = useContext(Context);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const menuFromJson = data.menu; // Se agrega el menu del json a una variable

        // Leer productos desde localStorage
        const productosLocales = JSON.parse(localStorage.getItem("productos")) || []; // Se agrega productos del json a productos locales

        
        // Clasificarlos por categoría
        const comidasExtra = productosLocales.filter(
          (p) => p.categoria === "comida" // Filtra productos por categoría de comida p (producto)
        );
        const bebidasExtra = productosLocales.filter(
          (p) => p.categoria === "bebida"
        );
        const postresExtra = productosLocales.filter(
          (p) => p.categoria === "postre"
        );

        // Combinar los productos del archivo JSON + los del localStorage
        const menuFinal = {
          comidas: [...(menuFromJson.comidas || []), ...comidasExtra],
          bebidas: [...(menuFromJson.bebidas || []), ...bebidasExtra],
          postres: [...(menuFromJson.postres || []), ...postresExtra],
        };

        setMenuData(menuFinal);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // El finally asegura que loading se cambie a false siempre
      }
    };
    fetchProducts();
  }, [url]);

  const buyProducts = (product) => {
    setCart([...carrito, product]);
  };

  

  const handleAddToCart = (product) => {
  buyProducts(product);
  alertaAgregarAlCarrito(product);
};


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
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
