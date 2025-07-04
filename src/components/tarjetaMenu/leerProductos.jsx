import { useState, useEffect } from "react";
import TarjetaMenu from "./tarjetaMenu";
import { useCartActions } from "../utils/botonDeAgregar";
import "./tarjetaMenu.css";
import { useFavorito } from "../utils/agregarAFavoritos";

const Products = ({ url }) => {
  const [menuData, setMenuData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart } = useCartActions();

useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const products = await response.json();

        // Clasificar productos del JSON por categoría (solo activos)
        const comidasFromJson = products.filter(
          (p) => p.categories?.name === "Comida" && p.isActive
        );
        const bebidasFromJson = products.filter(
          (p) => p.categories?.name === "Bebida" && p.isActive
        );
        const postresFromJson = products.filter(
          (p) => p.categories?.name === "Postre" && p.isActive
        );
        const menuTematicoFromJson = products.filter(
          (p) => p.categories?.name === "menuTematico" && p.isActive
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
        const menuTematicoExtra = productosLocales.filter(
          (p) => p.categoria === "menuTematico"
        );

        // Combinar productos del JSON + localStorage
        const menuFinal = {
          comidas: [...comidasFromJson, ...comidasExtra],
          bebidas: [...bebidasFromJson, ...bebidasExtra],
          postres: [...postresFromJson, ...postresExtra],
          menuTematico: [...menuTematicoFromJson, ...menuTematicoExtra]
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

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!menuData.comidas) return <div>No hay datos disponibles</div>;

  return (
    <div className="menu-contenedor">
      <h2 id="comidas" className="etiqueta-seccion">Comidas</h2>
      <div className="contenedor-productos">
        {menuData.comidas.map((product) => (
          <TarjetaMenu key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <h2 id="bebidas" className="etiqueta-seccion">Bebidas</h2>
      <div className="contenedor-productos">
        {menuData.bebidas.map((product) => (
          <TarjetaMenu key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <h2 id="postres" className="etiqueta-seccion">Postres</h2>
      <div className="contenedor-productos">
        {menuData.postres.map((product) => (
          <TarjetaMenu key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;