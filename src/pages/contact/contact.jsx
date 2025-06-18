import gatitoLlamando from '../../../public/images/logo-patita-oriental/gatito-llamando.png';
import "./contact.css";
import { useState } from "react";

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
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es obligatorio";
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Correo inválido";
    if (!formData.telefono.match(/^\d{10}$/)) newErrors.telefono = "Debe contener 10 dígitos";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <>
      <section className="contact-section" id="contact-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 alinear">
              <div className="image-section gatitoLlamando">
                <img src="/images/logo-patita-oriental/gatito-llamando.png" alt="Gatito llamando" />
              </div>
              <h2 className="contact-title mb-3">¡Contáctanos!</h2>
            </div>

            <div className="col-md-6">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h4 className="text-white mb-4 fw-bold mb-3 form-title">Deja tu mensaje</h4>

                {["nombre", "apellido", "email", "telefono", "mensaje"].map((field) => (
                  <div key={field} className="mb-3">
                    <label htmlFor={field} className="form-label text-white fw-semibold">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field !== "mensaje" ? (
                      <input
                        id={field}
                        type={field === "email" ? "email" : field === "telefono" ? "tel" : "text"}
                        name={field}
                        className="form-control"
                        placeholder={`Ingresa tu ${field}`}
                        value={formData[field]}
                        onChange={handleChange}
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

export { Contact };