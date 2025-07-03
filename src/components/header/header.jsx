import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import patitaLogoAzul from "../../../public/images/logo-patita-oriental/PatitaOriental_Azul_Horizontal.png";
import iconoDeUsuario from "../../../public/images/iconos/LogoUsr.svg";
import iconoDeCorazon from "../../../public/images/iconos/LogoLove.svg";
import iconoDeCarrito from "../../../public/images/iconos/LogoCart.svg";
import { useAuth } from "../context/AuthContext";
import "./header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarHeader, setMostrarHeader] = useState(true);
  const [ultimoScroll, setUltimoScroll] = useState(0);
  const { isLoggedIn, usuario } = useAuth();

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  useEffect(() => {
    const handleScroll = () => {
      const scrollActual = window.scrollY;
      if (scrollActual > ultimoScroll && scrollActual > 60) {
        setMostrarHeader(false); 
      } else {
        setMostrarHeader(true); 
      }
      setUltimoScroll(scrollActual);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ultimoScroll]);

  return (
    <header className={mostrarHeader ? "visible" : "oculto"}>
      <div className="header-container">
        <Link className="logo" to="/" onClick={toggleMenu}>
          <img src={patitaLogoAzul} alt="Logo Patita Oriental" />
        </Link>

        <button className="hamburguesa" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-menu ${menuAbierto ? "activo" : ""}`}>
          <ul className="navegacion">
            <li><Link onClick={toggleMenu} to="/Menu">Menú</Link></li>
            <li><Link onClick={toggleMenu} to="/MenuTematico">Menú Temático</Link></li>
            <li><Link onClick={toggleMenu} to="/Contact">Contacto</Link></li>
            <li><Link onClick={toggleMenu} to="/About">Sobre Nosotros</Link></li>
          </ul>

          <div className="iconos-movil">
             {isLoggedIn && usuario?.imagen ? (
            <Link onClick={toggleMenu} to="/Profile">
              <img className="imagen-Usuario-header" src={usuario.imagen} alt="Perfil" />
            </Link>
          ) : (
            <Link onClick={toggleMenu} to="/InicioDeSesion">
              <img className="imagen-Usuario-header" src={iconoDeUsuario} alt="Registro" />
            </Link>
          )}

            <Link onClick={toggleMenu} to="/Favoritos">
              <img className="icono-corazon" src={iconoDeCorazon} alt="Favoritos" />
            </Link>
            <Link onClick={toggleMenu} to="/Carrito">
              <img className="icono-carrito-movil" src={iconoDeCarrito} alt="Carrito" />
            </Link>
          </div>
        </nav>

        <div className="iconos">
          {isLoggedIn && usuario?.imagen ? (
            <Link onClick={toggleMenu} to="/Profile">
              <img className="imagen-Usuario-header" src={usuario.imagen} alt="Perfil" />
            </Link>
          ) : (
            <Link onClick={toggleMenu} to="/InicioDeSesion">
              <img className="imagen-Usuario-header" src={iconoDeUsuario} alt="Registro" />
            </Link>
          )}
          <Link onClick={toggleMenu} to="/Favoritos">
            <img className="icono-corazon" src={iconoDeCorazon} alt="Favoritos" />
          </Link>
          <Link onClick={toggleMenu} to="/Carrito">
            <img src={iconoDeCarrito} alt="Carrito" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
