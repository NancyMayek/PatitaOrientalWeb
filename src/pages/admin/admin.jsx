import { Link } from "react-router-dom";
import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [producto, setproducto] = useState({
    id: "",
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
    categoria: "",
    contador: 0,
  });

  const handleProductos = (e) => {
    setproducto({ ...producto, [e.target.name]: e.target.value });
  };


  const validarPrecio = (valor) => {
    const regex = /^\d+(\.\d{1,2})?$/; // Acepta números como 10, 10.5, 10.50
    return regex.test(valor);
  }

  const validarNombre = (nombre) =>{
    return nombre.trim().length > 3;
  }

  const validarImagen = (url) =>{
    return /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url);
  }

  const agregarProductos = (e) => {
    e.preventDefault();
    
    localStorage.setItem("producto", JSON.stringify(producto));
  };

  return (
    <section className="contact-section">
      <div className="w-50 mx-auto">
        <form
          className="contact-form"
          id="contactForm"
          onSubmit={agregarProductos}
        >
          <h4 className="text-white mb-4 fw-bold mb-3 form-title">
            Agregar Productos
          </h4>
          <div className="mb-3">
            <input
              type="text"
              name="nombre"
              onChange={handleProductos}
              value={producto.nombre}
              className="form-control"
              placeholder="Nombre" required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="precio"
              onChange={handleProductos}
              value={producto.precio}
              className="form-control"
              placeholder="Precio" required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="descripcion"
              onChange={handleProductos}
              value={producto.descripcion}
              className="form-control"
              placeholder="Decripcion" required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="imagen"
              onChange={handleProductos}
              value={producto.imagen}
              className="form-control"
              placeholder="Pon la Url de la imagen" required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="categoria"
              onChange={handleProductos}
              value={producto.categoria}
              className="form-control"
              placeholder="Categoria" required
            />
          </div>

          <button type="submit" className="btn btn-pink w-100 fw-bold">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export { Admin };
