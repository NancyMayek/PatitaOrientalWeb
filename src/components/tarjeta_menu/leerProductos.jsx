import { useState, useEffect } from "react";
import TarjetaMenu from "./tarjetaMenu";
import "./tarjeta_menu.css";
import { useCartActions } from "../utils/botonDeAgregar";

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

        const data = await response.json();
        const menuFromJson = data.menu;

        const productosLocales = JSON.parse(localStorage.getItem("productos")) || [];

        const comidasExtra = productosLocales.filter((p) => p.categoria === "comida");
        const bebidasExtra = productosLocales.filter((p) => p.categoria === "bebida");
        const postresExtra = productosLocales.filter((p) => p.categoria === "postre");

        const menuFinal = {
          comidas: [...(menuFromJson.comidas || []), ...comidasExtra],
          bebidas: [...(menuFromJson.bebidas || []), ...bebidasExtra],
          postres: [...(menuFromJson.postres || []), ...postresExtra],
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