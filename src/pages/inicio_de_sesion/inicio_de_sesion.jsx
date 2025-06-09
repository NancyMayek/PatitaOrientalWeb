import { Link } from "react-router-dom";
import gatitoConCorazones from "../../../public/images/logo-patita-oriental/gatitoConCorazones.png";
import { useAuth } from "../../components/context/AuthContext";
import { createContext, useState, useContext, useEffect } from "react";

import "./inicio_de_sesion.css";

const Inicio_de_sesion = () => {
  const {  logInInput, guardarLogInInput, logInCheck, setLogInInput } = useAuth();


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
          <h3 className="text-white"  id="cambioDeRegistro-InicioSesion">
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
          <form className="contact-form" id="contactForm" autoComplete="off" onSubmit={logInCheck}>
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
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="inputContraseña"
                className="form-control"
                placeholder="Contraseña"
                value={logInInput.inputContraseña}
                onChange={guardarLogInInput}
              />
            </div>

            <button type="submit" className="btn btn-pink w-100 fw-bold">
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

export { Inicio_de_sesion };
