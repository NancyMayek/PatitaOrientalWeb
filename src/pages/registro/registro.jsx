import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gatitoConCorazones from "../../../public/images/logo-patita-oriental/gatitoConCorazones.png";
import "./registro.css";

const Registro = () => {
  const navigate = useNavigate(); // Inicializar el hook
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    direccion: "",
    CP: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const setID = () => {};

  const agregarUsuario = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del form

    const res = await fetch("http://localhost:3001/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario),
    });

    if (res.ok) {
      const data = await res.json(); // API responde con los datos del usuario
      localStorage.setItem("usuario", JSON.stringify(data)); // guardar usuario en local storage
      navigate("/Profile"); // redirigir a la página de perfil
    } else {
      console.log("Hubo un error al registrar");
    }
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 alinear">
              <img
                src={gatitoConCorazones}
                alt="Gatito llamando"
                className="imagen-gato"
              />
              <h2 className="contact-title mb-3">¡Bienvenido!</h2>
              <h3 className="link-to-logIn">
                ¿Ya tienes una cuenta?{" "}
                <Link className="link-to-logIn" to="/Inicio_de_sesion">
                  Inicia Sesión
                </Link>
              </h3>
              <div className="row row-1">
                <div className="line short white"></div>
                <div className="line medium white"></div>
                <div className="line extra-long white"></div>
              </div>
              <div className="row row-2">
                <div className="line long white"></div>
                <div className="line short white"></div>
                <div className="line space"></div>
                <div className="line long pink"></div>
              </div>
            </div>

            <div className="col-md-6">
              <form
                className="contact-form"
                id="contactForm"
                onSubmit={agregarUsuario}
              >
                <h4 className="text-white mb-4 fw-bold mb-3 form-title">
                  Regístrarse
                </h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="nombre"
                      className="form-control"
                      placeholder="Nombre"
                      value={nuevoUsuario.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="apellido"
                      className="form-control"
                      placeholder="Apellido"
                      value={nuevoUsuario.apellido}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    value={nuevoUsuario.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="contraseña"
                    className="form-control"
                    placeholder="Contraseña"
                    value={nuevoUsuario.contraseña}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar Contraseña"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="direccion"
                      className="form-control"
                      placeholder="Dirección"
                      value={nuevoUsuario.direccion}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="CP"
                      className="form-control"
                      placeholder="Código Postal"
                      value={nuevoUsuario.CP}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="telefono"
                    className="form-control"
                    placeholder="Teléfono"
                    value={nuevoUsuario.telefono}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-pink w-100 fw-bold">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Registro };
