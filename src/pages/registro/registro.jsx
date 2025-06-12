import { Link } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";
import { useImageUpload } from "../../components/context/uploadImagesContext";
import Swal from "sweetalert2";
import gatitoConCorazones from "../../../public/images/logo-patita-oriental/gatitoConCorazones.png";
import iconoEditarFoto from "../../../public/images/iconos/icon-editar-foto.svg";
import "./registro.css";

const Registro = () => {
  const { guardarInfoDeUsuarios, agregarUsuario, nuevoUsuario } = useAuth();
  const { handleImageChange, uploading, uploadedUrl, setUploadedUrl } =
    useImageUpload();
  const defaultProfilePicture = "https://res.cloudinary.com/dkufsisvv/image/upload/v1749665101/USER%20PRE-SET%20IMAGES%20DONT%20DELETE/hemsfcvyetspmc5d450i.svg";
  //setUploadedUrl(defaultProfilePicture);

  //-------------------------------------Validaciones----------------

  const esNombreValido = (nombre) =>
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.trim());

  const esEmailValido = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const esDireccionValida = (direccion) =>
    /^[a-zA-Z0-9\s#\-.,]{5,}$/.test(direccion.trim());

  const esTelefonoValido = (tel) => /^\d{10}$/.test(tel.trim());

  const esCodigoPostalValido = (cp) => /^\d{5}$/.test(cp.trim());

  const esContrasenaValida = (contrasena) =>
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(contrasena.trim());

  const sonContrasenasIguales = (pass1, pass2) => pass1 === pass2;

  //-----------------------------------------------------------------

  const validarFormulario = () => {
    let errores = [];

    if (
      !esNombreValido(nuevoUsuario.nombre) ||
      !esNombreValido(nuevoUsuario.apellido)
    ) {
      errores.push("Nombre y apellido inválidos.");
    }

    if (!esEmailValido(nuevoUsuario.email)) {
      errores.push("Correo electrónico inválido.");
    }

    if (!esDireccionValida(nuevoUsuario.direccion)) {
      errores.push("Dirección inválida.");
    }

    if (!esCodigoPostalValido(nuevoUsuario.CP)) {
      errores.push("Código postal inválido.");
    }

    if (!esTelefonoValido(nuevoUsuario.telefono)) {
      errores.push("Teléfono inválido.");
    }

    if (!esContrasenaValida(nuevoUsuario.contraseña)) {
      errores.push(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número."
      );
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

  return (
    <>
      <section className="registro-section">
        <div className="gatitofoto-section">
          <img
            src={gatitoConCorazones}
            alt="Gatito llamando"
            className="imagen-gato"
          />
          <h2 className="registro-login-title mb-3">¡Bienvenido!</h2>
          <h3 className="text-white" id="cambioDeRegistro-InicioSesion">
            ¿Ya tienes una cuenta?{" "}
            <Link className="link-to-logIn" to="/Inicio_de_sesion">
              Inicia Sesión
            </Link>
          </h3>
          <div className="row row-1 lineas">
            <div className="line short white"></div>
            <div className="line medium white"></div>
            <div className="line extra-long white"></div>
          </div>
          <div className="row row-2 lineas">
            <div className="line long white"></div>
            <div className="line short white"></div>
            <div className="line space"></div>
            <div className="line long pink"></div>
          </div>
        </div>

        <div className="col-md-6 registrarse-container">
          <form
            className="contact-form"
            id="contactForm"
            onSubmit={async (e) => {
              e.preventDefault();
              if (validarFormulario() === true) {
                try {
                  await agregarUsuario(); // Esperamos que termine bien
                  Swal.fire(
                    "Éxito",
                    "Formulario válido, ¡datos enviados!",
                    "success"
                  );
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
            <div className="profile-picture-container mx-auto">
              <div className="profile-picture ">
                {uploading ? (
                  <div className="d-flex flex-column align-items-center loading">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
                  </div>
                ) : uploadedUrl ? ( //añadimos la url de la imagen (
                  <div>
                    <img src={uploadedUrl} alt="Uploaded" />
                  </div>
                ) : (
                  <img
                    src={defaultProfilePicture}
                    alt="Default Profile Picture"
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
                    className="icono-editar-foto"
                    src={iconoEditarFoto}
                    alt="icono de editar foto"
                    style={{ cursor: "pointer" }}
                  />
                </label>
              </div>
            </div>

            <h4 className="text-white mb-3 fw-bold  fs-2  mb-1 form-title titulo-registrarse">
              Regístrate
            </h4>

            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre"
                  value={nuevoUsuario.nombre}
                  onChange={guardarInfoDeUsuarios}
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="apellido"
                  className="form-control"
                  placeholder="Apellido"
                  value={nuevoUsuario.apellido}
                  onChange={guardarInfoDeUsuarios}
                />
              </div>
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={nuevoUsuario.email}
                onChange={guardarInfoDeUsuarios}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="direccion"
                  className="form-control"
                  placeholder="Dirección"
                  value={nuevoUsuario.direccion}
                  onChange={guardarInfoDeUsuarios}
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="CP"
                  className="form-control"
                  placeholder="Código Postal"
                  value={nuevoUsuario.CP}
                  onChange={guardarInfoDeUsuarios}
                />
              </div>
            </div>
            <div className="mb-2">
              <input
                type="tel"
                name="telefono"
                className="form-control"
                placeholder="Teléfono"
                value={nuevoUsuario.telefono}
                onChange={guardarInfoDeUsuarios}
              />
            </div>
            <div className="row">
              <div className="mb-3">
                <input
                  type="password"
                  name="contraseña"
                  className="form-control"
                  placeholder="Contraseña"
                  value={nuevoUsuario.contraseña}
                  onChange={guardarInfoDeUsuarios}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-pink w-100 fw-bold">
              Enviar
            </button>
            <h3
              className="text-white"
              id="cambioDeRegistro-InicioSesion-mobile"
            >
              ¿Ya tienes una cuenta?{" "}
              <Link className="link-to-logIn" to="/Inicio_de_sesion">
                Inicia Sesión
              </Link>
            </h3>
          </form>
        </div>
      </section>
    </>
  );
};

export { Registro };
