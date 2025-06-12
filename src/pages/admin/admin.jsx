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
    categoria: "comida",
    contador: 0,
  });

  const handleProductos = (e) => {
    setproducto({ ...producto, [e.target.name]: e.target.value });
  };

  const validarPrecio = (valor) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(valor);
  };

  const validarNombre = (nombre) => {
    return nombre.trim().length > 3;
  };

  const validarImagen = (url) => {
    return /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url);
  };

  const validarDescripcion = (descripcion) => {
    const longitud = descripcion.trim().length;
    return longitud > 15 && longitud < 100;
  };

  const validarCategoria = (categoria) => {
    const categoriasValidas = ["comida", "bebida", "postre"];
    return categoriasValidas.includes(categoria.toLowerCase().trim());
  };

  const agregarProductos = (e) => {
    e.preventDefault();

    if (
      !validarNombre(producto.nombre) ||
      !validarPrecio(producto.precio) ||
      !validarDescripcion(producto.descripcion) ||
      !validarImagen(producto.imagen) ||
      !validarCategoria(producto.categoria)
    ) {
      alert("Por favor, completa los campos correctamente.");
      return;
    }

    const nuevoProducto = { ...producto, id: `${producto.categoria}-${Date.now()}` };
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productosGuardados));

    alert("Tu producto ha sido registrado");
    console.log("Productos guardados:", productosGuardados);

    setproducto({
      id: "",
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: "",
      categoria: "comida",
      contador: 0,
    });
  };

  return (
    <section className="contact-section">
      <div className="w-50 mx-auto">
        <form className="contact-form" id="contactForm" onSubmit={agregarProductos}>
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
              placeholder="Nombre"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="precio"
              onChange={handleProductos}
              value={producto.precio}
              className="form-control"
              placeholder="Precio"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="descripcion"
              onChange={handleProductos}
              value={producto.descripcion}
              className="form-control"
              placeholder="Descripción"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="imagen"
              onChange={handleProductos}
              value={producto.imagen}
              className="form-control"
              placeholder="Pon la URL de la imagen"
              required
            />
          </div>
          <div className="mb-3">
            <select
              name="categoria"
              value={producto.categoria}
              onChange={handleProductos}
              className="form-control"
              required
            >
              <option value="comida">Comida</option>
              <option value="bebida">Bebida</option>
              <option value="postre">Postre</option>
            </select>
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