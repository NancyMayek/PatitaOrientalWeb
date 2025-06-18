import "./profile.css";
import iconoEditarFoto from "../../../public/images/iconos/icon-editar-foto.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";
import { useImageUpload } from "../../components/context/uploadImagesContext";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const defaultProfilePicture =
    "https://res.cloudinary.com/dkufsisvv/image/upload/v1749665101/USER%20PRE-SET%20IMAGES%20DONT%20DELETE/hemsfcvyetspmc5d450i.svg";

  const { isLoggedIn, setIsLoggedIn, usuario, setUsuario, uptadeUser, getListaUsuarios } = useAuth(); //de el contexto solo obtenemos si hay un usuario
  const { handleImageChange, uploading, uploadedUrl, setUploadedUrl} = useImageUpload();
 

  const cerrarSesionUsuario = () => {
    localStorage.removeItem("usuario");
    setIsLoggedIn(false);
    setUploadedUrl("");
    navigate("/Inicio_de_sesion");
  };

  const favoritosSesionUsuario = () => {
    navigate("/Favoritos");
  };

  const buscarUsuarioPorEmailYId = async (email, id) => {
    try {
      const usuarios = await getListaUsuarios();
      return usuarios.some((usuario) => usuario.id !== id && usuario.email === email.trim() );//Si el usuario diferente id que el usuario actual y el usuario tiene el mismo email
    } catch (error) {
      console.error("Error al buscar el usuario por email y Id:", error);
      return false; // En caso de error, asumimos que no se encontró
    }
  };

  //-------------------------------------Validaciones----------------

  const esNombreValido = (nombre) =>
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.trim());

  const esEmailValido = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const esDireccionValida = (direccion) =>
    /^[a-zA-Z0-9\s#\-.,]{5,}$/.test(direccion.trim());

  const esTelefonoValido = (tel) => /^\d{10}$/.test(tel.trim());

  const esCodigoPostalValido = (cp) => /^\d{5}$/.test(cp.trim());



  //-----------------------------------------------------------------

  const validarFormulario = async () => {
    let errores = [];

    if (
      !esNombreValido(usuario.nombre) ||
      !esNombreValido(usuario.apellido)
    ) {
      errores.push("Nombre y apellido inválidos.");
    }

    if (!esEmailValido(usuario.email)) {
      errores.push("Correo electrónico inválido.");
    } else {
      const yaExiste = await buscarUsuarioPorEmailYId (usuario.email, usuario.id);
      if (yaExiste) {
        errores.push("Ya existe un usuario registrado con este correo.");
      }
    }

    if (!esDireccionValida(usuario.direccion)) {
      errores.push("Dirección inválida.");
    }

    if (!esCodigoPostalValido(usuario.CP)) {
      errores.push("Código postal inválido.");
    }

    if (!esTelefonoValido(usuario.telefono)) {
      errores.push("Teléfono inválido.");
    }

    if (errores.length > 0) {
      return Swal.fire({
        icon: "error",
        title: "Errores en el formulario",
        html: errores.map((e) => `<li>${e}</li>`).join(""),
      });
    }

    return true; // Todo está validado correctamente
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
            <div className="foto-container">
              {uploading ? (
                <div className="d-flex flex-column align-items-center loading">
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                </div>
              ) : uploadedUrl ? (
                <img
                  className="foto-de-perfil"
                  src={uploadedUrl}
                  alt="foto de perfil"
                />
              ) : (
                <img
                  className="foto-de-perfil"
                  src={
                    usuario.imagen === ""
                      ? defaultProfilePicture
                      : usuario.imagen
                  } //Si el usuario no puso foto de perfil que se muestre la imagen for defecto
                  alt="foto de perfil"
                />
              )}
            </div>
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

        <form
          className="form-informacion-usuario"
          onSubmit={async (e) => {
            e.preventDefault();
            if ((await validarFormulario()) === true) {
              try {
                await uptadeUser(); // Esperamos que termine bien
                Swal.fire("Éxito", "¡Datos actualizados correctamente!", "success");
              } catch (error) {
                Swal.fire(
                  "Error",
                  "Hubo un problema al guardar el usuario",
                  "error"
                );
                console.error("Error al agregar usuario:", error);
              }
            }
          }}
        >
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
              type="button"
              onClick={() => window.location.reload()}
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
