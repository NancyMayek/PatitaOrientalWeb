import { Link } from "react-router-dom";
import "./admin.css";
import { useState, useEffect } from "react";
import ProductService from "../../services/ProductService"; 

const Admin = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productService = new ProductService();
        const data = await productService.getAllProducts();

        // Transformar los datos al formato que espera tu interfaz
        const transformedProducts = data.map(product => ({
          id: product.id,
          nombre: product.name,
          precio: product.priceProduct,
          descripcion: product.description,
          imagen: product.imageUrl,
          categoria: product.categories.name,
          isActive: product.isActive
        }));
        
        setProducts(transformedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Filtrar productos por categoría
  const comidas = products.filter(p => p.categoria === "Comida");
  const bebidas = products.filter(p => p.categoria === "Bebida");
  const postres = products.filter(p => p.categoria === "Postre");
  const menuTematico = products.filter(p => p.categoria === "menuTematico");

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderProductSection = (title, products) => (
    <>
      <h2>{title}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={`${title.toLowerCase()}-${product.id}`} className="col-10 col-md-4 col-lg-3">
            <div className="card mt-2">
              <img src={product.imagen} className="card-img-top" alt={product.nombre} />
              <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">${product.precio}</p>
                <p className="card-text">{product.descripcion}</p>
                <p className="card-text">Estado: {product.isActive ? "Activo" : "Inactivo"}</p>
                <Link
                  to={`/Formulario/editar/${product.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container">
      <div className="mt-4">
        <Link to="/formulario" className="btn btn-success">
          Agregar producto
        </Link>
      </div>
      {renderProductSection("Comidas", comidas)}
      {renderProductSection("Bebidas", bebidas)}
      {renderProductSection("Postres", postres)}
      {renderProductSection("Menú Temático", menuTematico)}

      
    </div>
  );
};

export { Admin };