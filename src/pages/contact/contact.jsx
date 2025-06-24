import gatitoLlamando from '../../../public/images/logo-patita-oriental/gatito-llamando.png';
import "./contact.css";
import { useState } from "react";
import Swal from "sweetalert2"; // Importación de SweetAlert

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.nombre.length < 2) 
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    if (formData.nombre.length > 100) 
      newErrors.nombre = "El nombre no debe superar los 100 caracteres";

    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es obligatorio";
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Correo inválido";
    if (!formData.telefono.match(/^\d{10}$/))
      newErrors.telefono = "Debe contener 10 dígitos numéricos";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      Swal.fire({
        title: "¡Miauu, mensaje enviado! 🐱💌",
        text: "Gracias por escribirnos, pronto responderemos tu consulta.",
        icon: "success",
        confirmButtonText: "Aceptar",
        background: "#fff",
        color: "#425184",
        confirmButtonColor: "#D579AF",
        showClass: { popup: "animate__animated animate__bounceIn" }, // Animación tierna
      });
    }
  };

  return (
    <section className="contact-section" id="contact-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 image-container">
            <img src={gatitoLlamando} alt="Gatito llamando" className="img-fluid cat-img" />
            <h2 className="contact-title mb-3">¡Contáctanos!</h2>
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <h4 className="text-white mb-4 fw-bold mb-3 form-title">Deja tu mensaje</h4>

              {["nombre", "apellido", "email", "teléfono", "mensaje"].map((field) => (
                <div key={field} className="mb-3">
                  <label htmlFor={field} className="form-label text-white fw-semibold">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field !== "mensaje" ? (
                    <input
                      id={field}
                      type={field === "email" ? "email" : field === "teléfono" ? "text" : "text"}
                      name={field}
                      className="form-control"
                      placeholder={`Ingresa tu ${field}`}
                      value={formData[field]}
                      onChange={handleChange}
                      maxLength={field === "nombre" ? "100" : "50"} // Ajusta para nombres más largos
                    />
                  ) : (
                    <textarea
                      id={field}
                      name={field}
                      className="form-control"
                      rows="3"
                      placeholder="Escribe tu mensaje"
                      value={formData[field]}
                      onChange={handleChange}
                    ></textarea>
                  )}
                  {errors[field] && <small className="text-danger">{errors[field]}</small>}
                </div>
              ))}

              <button type="submit" className="btn btn-pink w-100 fw-bold">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };