import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Formulario = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
    categoria: "comida",
    contador: 0,
    isActive: true, // Nuevo campo
  });

  useEffect(() => {
    if (state?.producto) {
      setIsEditing(true);
      setProducto(state.producto);
    }
  }, [state]);

  const handleProductos = (e) => {
    const { name, value, type } = e.target;
    setProducto({
      ...producto,
      [name]: name === "isActive" ? value === "true" : value,
    });
  };

  const validarPrecio = (valor) => /^\d+(\.\d{1,2})?$/.test(valor);

  const validarNombre = (nombre) => nombre.trim().length > 3;

  const validarImagen = (url) =>
    /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url);

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

    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];

    if (isEditing) {
      const index = productosGuardados.findIndex(p => p.id === producto.id);
      if (index !== -1) {
        productosGuardados[index] = producto;
      }
    } else {
      const nuevoProducto = {
        ...producto,
        id: `${producto.categoria}-${Date.now()}`
      };
      productosGuardados.push(nuevoProducto);
    }

    localStorage.setItem("productos", JSON.stringify(productosGuardados));

    alert(isEditing ? "Producto actualizado correctamente" : "Producto agregado correctamente");

    navigate("/Admin");

    if (!isEditing) {
      setProducto({
        id: "",
        nombre: "",
        precio: "",
        descripcion: "",
        imagen: "",
        categoria: "comida",
        contador: 0,
        isActive: true,
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="w-50 mx-auto">
        <form className="contact-form" id="contactForm" onSubmit={agregarProductos}>
          <h4 className="text-white mb-4 fw-bold mb-3 form-title">
            {isEditing ? "Editar Producto" : "Agregar Productos"}
          </h4>

          <div className="mb-3">
            <label className="form-label text-white fw-semibold">Nombre del producto</label>
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
            <label className="form-label text-white fw-semibold">Precio</label>
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
            <label className="form-label text-white fw-semibold">Descripción</label>
            <input
              type="text"
              name="descripcion"
              onChange={handleProductos}
              value={producto.descripcion}
              className="form-control"
              placeholder="Descripción breve del producto"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white fw-semibold">URL de la imagen</label>
            <input
              type="text"
              name="imagen"
              onChange={handleProductos}
              value={producto.imagen}
              className="form-control"
              placeholder="https://..."
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white fw-semibold">Categoría</label>
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
              <option value="menu-tematico">Menú Temático</option>
            </select>
          </div>

          {/* Select para isActive */}
          <div className="mb-3">
            <label className="form-label text-white fw-semibold">Estado del producto</label>
            <select
              name="isActive"
              value={producto.isActive}
              onChange={handleProductos}
              className="form-control"
            >
              <option value="true">Activo</option>
              <option value="false">No activo</option>
            </select>
          </div>

          <button type="submit" className="btn btn-pink w-100 fw-bold">
            {isEditing ? "Guardar Cambios" : "Agregar Producto"}
          </button>
        </form>

        <Link to="/Admin">
          <button className="btn btn-pink w-100 fw-bold mt-2">
            Regresar a los productos
          </button>
        </Link>
      </div>
    </section>
  );
};

export { Formulario };

