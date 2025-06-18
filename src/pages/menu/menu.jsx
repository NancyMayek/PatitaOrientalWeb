import { useState, useEffect, useRef } from "react";
import Products from "../../components/tarjeta_menu/leerProductos";
import "./menu.css";

const Menu = () => {
  const [mostrarFiltros, setMostrarFiltros] = useState(true);
  const ultimoScroll = useRef(0);

  useEffect(() => {
    const manejarScroll = () => {
      const scrollActual = window.scrollY;

      if (scrollActual > ultimoScroll.current && scrollActual > 80) {
        
        setMostrarFiltros(false);
      } else {
        
        setMostrarFiltros(true);
      }

      ultimoScroll.current = scrollActual;
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  return (
    <main>
      <h2 className="menu-title">Conoce nuestro menú</h2>

      <ul className={`filtros ${mostrarFiltros ? "visible" : "oculto"}`}>
        <li><a className="filtro-btn" href="#comidas">Comida</a></li>
        <li><a className="filtro-btn" href="#bebidas">Bebidas</a></li>
        <li><a className="filtro-btn" href="#postres">Postres</a></li>
      </ul>

      <Products url="/data/menu.json" />
    </main>
  );
};

export { Menu };
