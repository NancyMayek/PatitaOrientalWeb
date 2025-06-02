import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 importa Link
import "./header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header>
      <div className="header-container">
            {/* Logo */}
            <Link className="logo" to="/"> {/* 👈 cambia a Link */}
            <img
                src="../../../public/images/logo-patita-oriental/PatitaOriental_Azul_Horizontal.png"
                alt="Logo Patita Oriental"
            />
            </Link>

            {/* Botón hamburguesa */}
            <button className="hamburguesa" onClick={toggleMenu}>
            ☰
            </button>

            {/* Menú de navegación */}
            <nav className={`nav-menu ${menuAbierto ? "activo" : ""}`}>
                <ul className="navegacion">
                    <li><Link to="/Menu">Menú</Link></li>
                    <li><Link to="/Menu_tematico">Menú Temático</Link></li>
                    <li><Link to="/Contact">Contacto</Link></li>
                    <li><Link to="/About">Sobre Nosotros</Link></li>
                </ul>

                {/* Íconos móviles dentro del menú */}
                <div className="iconos-movil">
                    <Link to="/Profile"><img src="../../../public/images/iconos/LogoUsr.svg" alt="Perfil" /></Link>
                    <Link to="/Favoritos"><img className="icono-corazon" src="../../../public/images/iconos/LogoLove.svg" alt="Favoritos" /></Link>
                    <Link to="/Carrito"><img src="../../../public/images/iconos/LogoCart.svg" alt="Carrito" /></Link>
                </div>
            </nav>

            {/* Íconos (escritorio) */}
            <div className="iconos">
            <Link to="/Profile"><img src="../../../public/images/iconos/LogoUsr.svg" alt="Perfil" /></Link>
            <Link to="/Favoritos"><img className="icono-corazon" src="../../../public/images/iconos/LogoLove.svg" alt="Favoritos" /></Link>
            <Link to="/Carrito"><img src="../../../public/images/iconos/LogoCart.svg" alt="Carrito" /></Link>
            </div>
      </div>
    </header>
  );
}

export default Header;