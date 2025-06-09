import { useState } from "react";
import { Link } from "react-router-dom";
import patitaLogoAzul from "../../../public/images/logo-patita-oriental/PatitaOriental_Azul_Horizontal.png";
import iconoDeUsuario from "../../../public/images/iconos/LogoUsr.svg";
import iconoDeCorazon from "../../../public/images/iconos/LogoLove.svg";
import iconoDeCarrito from "../../../public/images/iconos/LogoCart.svg";
import { useAuth } from "../context/AuthContext";
import "./header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { isLoggedIn, usuario } = useAuth();

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  return (
    <header>
      <div className="header-container">
        <Link className="logo" to="/" onClick={toggleMenu}>
          <img src={patitaLogoAzul} alt="Logo Patita Oriental" />
        </Link>

        <button className="hamburguesa" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-menu ${menuAbierto ? "activo" : ""}`}>
          <ul className="navegacion">
            <li>
              <Link to="/Menu" onClick={toggleMenu}>Menú</Link>
            </li>
            <li>
              <Link to="/Menu_tematico" onClick={toggleMenu}>Menú Temático</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={toggleMenu}>Contacto</Link>
            </li>
            <li>
              <Link to="/About" onClick={toggleMenu}>Sobre Nosotros</Link>
            </li>
          </ul>

          <div className="iconos-movil">
            {isLoggedIn && usuario?.imagen ? (
              <Link to="/Profile" onClick={toggleMenu}>
                <img src={usuario.imagen} alt="Perfil" />
              </Link>
            ) : (
              <Link to="/Inicio_de_sesion" onClick={toggleMenu}>
                <img src={iconoDeUsuario} alt="Registro" />
              </Link>
            )}

            <Link to="/Favoritos" onClick={toggleMenu}>
              <img
                className="icono-corazon"
                src={iconoDeCorazon}
                alt="Favoritos"
              />
            </Link>
            <Link to="/Carrito" onClick={toggleMenu}>
              <img src={iconoDeCarrito} alt="Carrito" />
            </Link>
          </div>
        </nav>

        <div className="iconos">
          {isLoggedIn && usuario?.imagen ? (
            <Link to="/Profile" onClick={toggleMenu}>
              <img
                className="imagen-Usuario-header"
                src={usuario.imagen}
                alt="Perfil"
              />
            </Link>
          ) : (
            <Link to="/Inicio_de_sesion" onClick={toggleMenu}>
              <img
                className="imagen-Usuario-header"
                src={iconoDeUsuario}
                alt="Registro"
              />
            </Link>
          )}
          <Link to="/Favoritos" onClick={toggleMenu}>
            <img
              className="icono-corazon"
              src={iconoDeCorazon}
              alt="Favoritos"
            />
          </Link>
          <Link to="/Carrito" onClick={toggleMenu}>
            <img src={iconoDeCarrito} alt="Carrito" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
