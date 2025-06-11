import "./profile.css";
import iconoEditarFoto from "../../../public/images/iconos/icon-editar-foto.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";
import { useImageUpload } from "../../components/context/uploadImagesContext";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, usuario, setUsuario, uptadeUser } =
    useAuth(); //de el contexto solo obtenemos si hay un usuario
  const { handleImageChange, uploading, uploadedUrl } = useImageUpload();

  const cerrarSesionUsuario = () => {
    localStorage.removeItem("usuario");
    setIsLoggedIn(false);
    navigate("/Inicio_de_sesion");
  };

  const favoritosSesionUsuario = () => {
    navigate("/Favoritos");
  };

  const reloadProfile = () => {
    navigate("/Profile");
  };

  const handleGuardarNuevaInformacion = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
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
        <div className="Usuario-SideBar-Boton" onClick={cerrarSesionUsuario}>
          <h1>Cerrar Sesión</h1>
        </div>
      </div>
      {/* Informacion de usuario */}
      <div className="informacion-de-usuario-seccion">
        <div className="usuario-info-resumen">
          <div className="usuario-foto-seccion">
            {uploading ? (
              <div className="d-flex flex-column align-items-center loading">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : uploadedUrl ? (
              <div className="foto-container">
                <img
                  className="foto-de-perfil"
                  src={uploadedUrl}
                  alt="foto de perfil"
                />
              </div>
            ) : (
              <div className="foto-container">
                <img
                  className="foto-de-perfil"
                  src={usuario.imagen}
                  alt="foto de perfil"
                />
              </div>
            )}
            <div className="file-upload-wrapper">
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: "none" }}
              />

              <label htmlFor="fileInput">
                <img
                  className="icono-editar-foto-profile"
                  src={iconoEditarFoto}
                  alt="icono de editar foto"
                  style={{ cursor: "pointer" }}
                />
              </label>
            </div>
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
            <div className="usuario-nav-botones-movile ">
              <button
                className="btn-Favoritos"
                onClick={favoritosSesionUsuario}
              >
                {" "}
                Ver Favoritos
              </button>
              <button
                className="btn-cerrar-sesion"
                onClick={cerrarSesionUsuario}
              >
                {" "}
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>

        <form className="form-informacion-usuario" onSubmit={uptadeUser}>
          <div className="form-nivel">
            <div className="elemento-de-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <div className="input-grey">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={usuario.name}
                  defaultValue={usuario.nombre}
                  onChange={handleGuardarNuevaInformacion}
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
                  value={usuario.apellido}
                  onChange={handleGuardarNuevaInformacion}
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
                  id="email"
                  name="email"
                  value={usuario.email}
                  defaultValue={usuario.email}
                  onChange={handleGuardarNuevaInformacion}
                  required
                />
              </div>
            </div>
            <div className="elemento-de-formulario">
              <label htmlFor="telefono">Teléfono:</label>
              <div className="input-grey">
                <input
                  type="number"
                  id="telefono"
                  name="telefono"
                  value={usuario.telefono}
                  defaultValue={usuario.telefono}
                  onChange={handleGuardarNuevaInformacion}
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
                  value={usuario.direccion}
                  defaultValue={usuario.direccion}
                  onChange={handleGuardarNuevaInformacion}
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
                  value={usuario.CP}
                  defaultValue={usuario.CP}
                  onChange={handleGuardarNuevaInformacion}
                  required
                />
              </div>
            </div>
          </div>

          <div className="botones-cambios-usuarios">
            <button type="submit" className="btn-guardar-cambios">
              Guardar cambios
            </button>
            <button
              type="submit"
              onClick={reloadProfile}
              className="btn-cancelar-cambios"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Profile };
