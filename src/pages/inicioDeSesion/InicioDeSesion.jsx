import { Link } from "react-router-dom";
import gatitoConCorazones from "../../../public/images/logo-patita-oriental/gatitoConCorazones.png";
import { useAuth } from "../../components/context/AuthContext";
import Swal from "sweetalert2";
import { createContext, useState, useContext, useEffect } from "react";

import "./inicioDeSesion.css";

const InicioDeSesion = () => {
  const { logInInput, guardarLogInInput, logInCheck, setLogInInput } =
    useAuth();
  //-------------------------------------Validaciones----------------

  const esEmailValido = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  //-----------------------------------------------------------------

  const validarFormulario = async () => {
    let errores = [];

    if (!esEmailValido(logInInput.inputEmail)) {
      errores.push("Correo electrónico inválido.");
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

  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  return (
    <>
      <section className="registro-section" id="inicio-sesion">
        <div className="gatitofoto-section">
          <img
            src={gatitoConCorazones}
            alt="Gatito llamando"
            className="imagen-gato"
          />
          <h2 className="registro-login-title mb-3">¡Hola de nuevo!</h2>
          <h3 className="text-white" id="cambioDeRegistro-InicioSesion">
            ¿Aún no tienes una cuenta?{" "}
            <Link className="link-to-logIn" to="/Registro">
              Regístrate
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
            className="registroInicioSesion-form"
            id="contactForm"
            autoComplete="off"
            onSubmit={async (e) => {
              e.preventDefault();
              if ((await validarFormulario()) === true) {
                const mensaje = await logInCheck(); // Esperamos que termine bien
                mensaje === true
                  ? Swal.fire("Éxito", "¡Bienvenido!", "success")
                  : Swal.fire("Error", mensaje, "error");
              }
            }}
          >
            <h4 className="text-white mb-3 fw-bold  fs-1  mb-1 form-title titulo-registrarse">
              Inicia Sesión
            </h4>

            <div className="mb-2">
              <input
                type="email"
                name="inputEmail"
                className="form-control"
                placeholder="Correo electrónico"
                value={logInInput.inputEmail}
                onChange={guardarLogInInput}
                required
              />
            </div>

            <div className="mb-4 input-group">
              <input
                type={mostrarContrasena ? "text" : "password"}
                name="inputContraseña"
                className="form-control"
                placeholder="Contraseña"
                value={logInInput.inputContraseña}
                onChange={guardarLogInInput}
                required
              />
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => setMostrarContrasena(!mostrarContrasena)}
              >
                <i
                  className={`bi ${
                    mostrarContrasena ? "bi-eye-slash" : "bi-eye"
                  }`}
                ></i>
              </button>
            </div>

            <button type="submit" className="btn btn-pink w-100 fw-bold mx-auto d-block">
              Ingresar
            </button>
            <h3
              className="text-white"
              id="cambioDeRegistro-InicioSesion-mobile"
            >
              ¿No tienes una cuenta?{" "}
              <Link className="link-to-logIn" to="/Registro">
                Regístrate
              </Link>
            </h3>
          </form>
        </div>
      </section>
    </>
  );
};

export { InicioDeSesion };
