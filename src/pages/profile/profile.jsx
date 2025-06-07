import "./profile.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, usuario } = useAuth(); //de el contexto solo obtenemos si hay un usuario

  const cerrarSesionUsuario = () => {
    localStorage.removeItem("usuario");
    setIsLoggedIn(false);
    navigate("/Inicio_de_sesion");
  };

  return (
    <div className="perfil-de-usuario-contenedor">
      {/* Side bar */}
      <div className="perfil-de-Usuario-SideBar">
        <h1 className="title-profile">Perfil de usuario</h1>
        <div className="Usuario-SideBar-Boton">
          <h1>Información de usuario</h1>
        </div>
        <Link className="Usuario-SideBar-Boton" to="/Favoritos">
          <h1>Favoritos</h1>
        </Link>
        <div className="Usuario-SideBar-Boton">
          <h1>Historial de pedidos</h1>
        </div>
      </div>
      {/* Informacion de usuario */}
      <div className="informacion-de-usuario-seccion">
        <div className="usuario-info-resumen">
          <div className="usuario-foto-seccion">
            <div className="foto-container">
              <img
                className="foto-de-perfil"
                src={usuario.imagen}
                alt="foto de perfil"
              />
            </div>
            <img
              className="icono-editar-foto"
              src="../../../public/images/iconos/icon-editar-foto.svg"
              alt="icono de editar foto"
            />
          </div>
          <div className="usuario-informacion-principal">
            <h1 className="title-profile" id="nombre-usuario ">
              {usuario.nombre} {usuario.apellido}
            </h1>
            <div className="direccion">
              <img
                src="../../../public/images/iconos/icon-direccion.svg"
                alt="icono de casa"
              />
              <h2>{usuario.direccion}</h2>
            </div>
            <button className="btn-cerrar-sesion" onClick={cerrarSesionUsuario}>Cerrar Sesión</button>
          </div>
        </div>

        <form className="form-informacion-usuario">
          <div className="form-nivel">
            <div className="elemento-de-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <div className="input-grey">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  defaultValue={usuario.nombre}
                  required
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="apellido">Apellido:</label>
              <div className="input-grey">
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  defaultValue={usuario.apellido}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-nivel">
            <div className="elemento-de-formulario">
              <label htmlFor="correo">Correo:</label>
              <div className="input-grey">
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  defaultValue={usuario.email}
                  required
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="telefono">Teléfono:</label>
              <div className="input-grey">
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  defaultValue={usuario.telefono}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-nivel">
            <div className="elemento-de-formulario">
              <label htmlFor="direccion">Dirección:</label>
              <div className="input-grey">
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  defaultValue={usuario.direccion}
                  required
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="CP">Código Postal:</label>
              <div className="input-grey">
                <input
                  type="number"
                  id="CP"
                  name="CP"
                  defaultValue={usuario.CP}
                  required
                />
              </div>
            </div>
          </div>

          <div className="botones-cambios-usuarios">
            <button type="submit" className="btn-guardar-cambios">
              Guardar cambios
            </button>
            <button type="submit" className="btn-cancelar-cambios">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Profile };
