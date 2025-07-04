import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";

const productService = new ProductService();

const Formulario = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
    categoriaId: 1,
    contador: 0,
    isActive: true,
  });

  useEffect(() => {
    const cargarProducto = async () => {
      // Si viene desde el estado de react-router (navegación)
      if (state?.producto) {
        const p = state.producto;

        setProducto({
          id: p.id,
          nombre: p.nombre,
          descripcion: p.descripcion,
          precio: p.precio,
          imagen: p.imagen,
          categoriaId: mapCategoriaToId(p.categoria),
          contador: 0,
          isActive: p.isActive,
        });

        setIsEditing(true);
      } 
      
      else if (!isNaN(parsedId)) {
        try {
          const p = await productService.getProductById(parsedId);

          if (!p) throw new Error("Producto no encontrado");

          setProducto({
            id: p.id,
            nombre: p.name,
            descripcion: p.description,
            precio: p.priceProduct,
            imagen: p.imageUrl,
            categoriaId: p.categories?.id || 1,
            contador: 0,
            isActive: p.isActive,
          });

          setIsEditing(true);
        } catch (error) {
          console.error("Error al cargar producto:", error);
          alert("No se pudo cargar el producto.");
        }
      }
    };

    cargarProducto();
  }, [parsedId, state]);

  const mapCategoriaToId = (nombre) => {
    const mapa = {
      Comida: 1,
      Bebida: 2,
      Postre: 3,
      menuTematico: 4,
    };
    return mapa[nombre] || 1;
  };

  const handleProductos = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: name === "isActive" ? value === "true" : value,
    });
  };

  const validarPrecio = (valor) => /^\d+(\.\d{1,2})?$/.test(valor);
  const validarNombre = (nombre) => nombre.trim().length > 3;
  const validarImagen = (url) => /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url);
  const validarDescripcion = (descripcion) =>
    descripcion.trim().length > 15 && descripcion.trim().length < 100;

  const agregarProductos = async (e) => {
    e.preventDefault();

    const dataToSend = {
      name: producto.nombre,
      description: producto.descripcion,
      priceProduct: parseFloat(producto.precio),
      imageUrl: producto.imagen,
      isActive: producto.isActive,
      categories: {
        id: parseInt(producto.categoriaId),
      },
    };

    if (
      !validarNombre(producto.nombre) ||
      !validarPrecio(producto.precio) ||
      !validarDescripcion(producto.descripcion) ||
      !validarImagen(producto.imagen)
    ) {
      alert("Por favor, completa los campos correctamente.");
      return;
    }

    try {
      if (isEditing) {
        await productService.updateProduct(producto.id, dataToSend);
        alert("Producto actualizado correctamente");
      } else {
        await productService.createProduct(dataToSend);
        alert("Producto creado correctamente");
      }

      navigate("/Admin");

      if (!isEditing) {
        setProducto({
          id: "",
          nombre: "",
          precio: "",
          descripcion: "",
          imagen: "",
          categoriaId: 1,
          contador: 0,
          isActive: true,
        });
      }
    } catch (error) {
      console.error("Error al guardar producto:", error);
      alert("Ocurrió un error al guardar el producto.");
    }
  };

  return (
    <section className="contact-section">
      <div className="w-50 mx-auto">
        <form className="contact-form" onSubmit={agregarProductos}>
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
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white fw-semibold">Categoría</label>
            <select
              name="categoriaId"
              value={producto.categoriaId}
              onChange={handleProductos}
              className="form-control"
              required
            >
              <option value={1}>Comida</option>
              <option value={2}>Bebida</option>
              <option value={3}>Postre</option>
              <option value={4}>Menú Temático</option>
            </select>
          </div>

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