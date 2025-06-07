import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import defaultProfilePicture from "../../../public/images/iconos/LogoUsr.svg";
import gatitoConCorazones from "../../../public/images/logo-patita-oriental/gatitoConCorazones.png";
import "./registro.css";

const Registro = () => {
  const navigate = useNavigate(); //asignamos la referencia de navegacion
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const { setUsuario,   setIsLoggedIn } = useAuth();



  const cloudName = "dkufsisvv"; // Replace with your Cloudinary cloud name
  const uploadPreset = "unsigned_upload"; // Replace with your unsigned preset

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      handleUpload(file); // Call upload directly
    }
  };

  const handleUpload = async (file) => {
    if (!file) {
      alert("Please select an image first");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    setUploading(true);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setUploadedUrl(data.secure_url);
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const [nuevoUsuario, setNuevoUsuario] = useState({
    // Inicializar el hook
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    CP: "",
    imagen: "",
    telefono: "",
    contraseña: "",
  });

  const guardarInfoDeUsuarios = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario, //trae toda la infomacion de el usuario que ya esta escrita
      [e.target.name]: e.target.value, // solo cambia la que le pide el input
    });
  };

  const getUsuarios = async () => {
    const res = await fetch("http://localhost:3001/api/usuarios", {
      method: "GET", //  GET es default
    });
    if (res.ok) {
      const data = await res.json(); // API responde con los datos del usuario
      
      return data;
    } else {
      console.log("Hubo un error al GET JSON DE USUARIOS");
    }
  };

  const agregarUsuario = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del form
    const usuarioArr = await getUsuarios();
    nuevoUsuario.id = usuarioArr.length + 1; //añadimos el ID de usuario
    nuevoUsuario.imagen = uploadedUrl; //añadimos la url de la imagen 

    const res = await fetch("http://localhost:3001/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario),
    });

    if (res.ok) {
      const data = await res.json(); // API responde con los datos del usuario
      localStorage.setItem("usuario", JSON.stringify(data)); // guardar usuario en local storage
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      setUsuario(data); // 👈 Aquí actualizas el contexto inmediatamente
      navigate("/Profile"); // redirigir a la página de perfil
    } else {
      console.log("Hubo un error al registrar");
      return localStorage.setItem("isLoggedIn", "false");;
    }
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
          <h2 className="contact-title mb-3">¡Bienvenido!</h2>
          <h3 className="text-white">
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

        <div className="col-md-6 registrarse-container">
          <form
            className="contact-form"
            id="contactForm"
            onSubmit={agregarUsuario}
          >
            <div className="profile-picture-container mx-auto">
              <div className="profile-picture ">
                {uploading ? (
                  <div className="d-flex flex-column align-items-center loading">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    >
                  </div>
                  </div>
                ) : uploadedUrl ? (
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
                  style={{ display: "none" }} // Hide the real file input
                />

                <label htmlFor="fileInput">
                  <img
                    className="icono-editar-foto"
                    src="../../../public/images/iconos/icon-editar-foto.svg"
                    alt="icono de editar foto"
                    style={{ cursor: "pointer" }} // Make it look clickable
                  />
                </label>
              </div>
            </div>

            <h4 className="text-white mb-3 fw-bold  fs-2  mb-1 form-title titulo-registrarse">
              Regístrarse
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
              <div className="col-md-6 mb-3">
                <input
                  type="password"
                  name="contraseña"
                  className="form-control"
                  placeholder="Contraseña"
                  value={nuevoUsuario.contraseña}
                  onChange={guardarInfoDeUsuarios}
                />
              </div>
              <div className=" col-md-6 mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar Contraseña"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-pink w-100 fw-bold">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export { Registro };
