import { useState, useEffect, useContext } from "react";
import TarjetaMenu from "./tarjeta_menu";
import { Context } from "../context/Contex";
import "./tarjeta_menu.css";

const Products = ({ url }) => {
  const [menuData, setMenuData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { carrito, setCart } = useContext(Context);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setMenuData(data.menu);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [url]);

  const buyProducts = (product) => setCart([...carrito, product]);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!menuData.comidas) return <div>No hay datos disponibles</div>;

  return (
    <div className="menu-contenedor">
      <h2 id="comidas" className="etiqueta-seccion">Comidas</h2>
      <div className="contenedor-productos">
        {menuData.comidas.map((p) => (
          <TarjetaMenu key={p.id} {...p} onAddToCart={buyProducts} />
        ))}
      </div>
      <h2 id="bebidas" className="etiqueta-seccion">Bebidas</h2>
      <div className="contenedor-productos">
        {menuData.bebidas.map((p) => (
          <TarjetaMenu key={p.id} {...p} onAddToCart={buyProducts} />
        ))}
      </div>
      <h2 id="postres" className="etiqueta-seccion">Postres</h2>
      <div className="contenedor-productos">
        {menuData.postres.map((p) => (
          <TarjetaMenu key={p.id} {...p} onAddToCart={buyProducts} />
        ))}
      </div>
    </div>
  );
};

export default Products;
