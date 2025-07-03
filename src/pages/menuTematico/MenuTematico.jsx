import './menuTematico.css'
import React, { useEffect, useState, useContext } from "react";
import TarjetaMenuTematico from '../../components/tarjetaMenu/TarjetaMenuTematico';
import { Context } from '../../components/context/Contex';
import { useCartActions } from '../../components/utils/botonDeAgregar';
import { useFavorito } from '../../components/utils/agregarAFavoritos';



// Componente principal de la página de menú temátic
const MenuTematico = () => {
    const [paquetes, setPaquetes] = useState([]); // Estado local para guardar los paquetes del menú temático cargados desde un JSON
    const [indiceBanner, setIndiceBanner] = useState(0);

    // Acceso al contexto global del carrito de compras
    const {carrito, setCart} = useContext(Context);


    const {handleAddToCart} = useCartActions(); // Se llama la función de handleAddToCart de useCarActions 
    const { favoriteProducts} = useFavorito(); // Se manda a llamar la función de favoriteProducts de useFavorito
// Arreglo de imágenes que se mostrarán en el banner como carrusel
 const imagenesBanner = [
        
        {src: "https://live.staticflickr.com/65535/54573324737_455d6f7e9c_b.jpg", alt: "Opcion 2"},
        {src: "https://live.staticflickr.com/65535/54574421998_6239f1fa3d_b.jpg", alt: "Opcion 2"},
        {src: "https://live.staticflickr.com/65535/54574192601_d821823de6_b.jpg", alt: "Opcion 2"},
    ];

     // useEffect que se ejecuta una vez al cargar el componente
    // Carga los datos de los paquetes desde un archivo JSON ubicado en la carpeta /public/data/
<<<<<<< HEAD:src/pages/menu_tematico/menu_tematico.jsx
    useEffect(() => {
            const fetchMenuTematico = async () => {
                try {
                    const response = await fetch('../../../public/data/menu.json'); // Reemplaza con tu endpoint
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    const data = await response.json();
                    
                    // Filtrar solo los productos de categoría "menuTematico" y que estén activos
                    const menuTematicoProducts = data.filter(
                        product => product.categories?.name === "menuTematico" && product.isActive
                    );
                    
                    setPaquetes(menuTematicoProducts);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            
            fetchMenuTematico();
        }, []);
=======
  useEffect(() => {
    fetch('/data/menuTematico.json')
      .then(response => response.json())
      .then(data => setPaquetes(data))
      .catch(error => console.error('Error al cargar los datos del menú temático', error));
  }, []);
>>>>>>> dev:src/pages/menuTematico/MenuTematico.jsx

  // Cambiar automáticamente el banner cada 10 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceBanner((prev) => (prev + 1) % imagenesBanner.length);
    }, 10000);
    return () => clearInterval(intervalo);
  }, [imagenesBanner.length]);
// Función que se ejecuta al hacer clic en "Agregar al carrito"
    const buyProducts = (product) => {
      setCart([...carrito, product])
     
      
    }
   
    return (
        <>
           {/* Carrusel de banner con botones para cambiar de imagen */}
            <div className="banner-carrusel">
                <div className="imagen-banner">
                    <img
                        src={imagenesBanner[indiceBanner].src}
                        alt={imagenesBanner[indiceBanner].alt}
                    />
                </div>
                <div className="botones-banner">
                    {imagenesBanner.map((_, i) => (
                        <button
                            key={i}
                            className={`boton-banner ${i === indiceBanner ? 'activo' : ''}`}
                            onClick={() => setIndiceBanner(i)}
                        ></button>
                    ))}
                </div>
            </div>

        {/* Renderizado de las tarjetas del menú temático */}
            <div className="contenedor-menu-tematico">
                {paquetes.map((item) => (
                    <TarjetaMenuTematico
                        key={item.id}
                        id={item.id}
<<<<<<< HEAD:src/pages/menu_tematico/menu_tematico.jsx
                        nombre={item.name}
                        precio={item.priceProduct}
                        descripcion={item.description}
                        imagen={item.imagenUrl}
                        onAddToCart ={ buyProducts}
=======
                        nombre={item.Paquete}
                        precio={item.Precio}
                        descripcion={item.Descripción}
                        imagen={item.Imagen}
                        onAddToCart ={ handleAddToCart}
                        onAddToFavorites = {favoriteProducts}
>>>>>>> dev:src/pages/menuTematico/MenuTematico.jsx
                    />
                ))}
            </div>
           
        </>
    );
};

// Exportación del componente para que pueda ser utilizado en otras partes del proyecto
export { MenuTematico };