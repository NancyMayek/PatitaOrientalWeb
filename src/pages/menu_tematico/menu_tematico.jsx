import './menu_tematico.css'
import React, { useEffect, useState, useContext } from "react";
import TarjetaMenuTematico from '../../components/tarjeta_menu/tarjeta_menu_tematico';
import { Context } from '../../components/context/Contex';

const Menu_Tematico = () => {
    const [paquetes, setPaquetes] = useState([]);
    const [indiceBanner, setIndiceBanner] = useState(0);

    const {carrito, setCart} = useContext(Context);

 const imagenesBanner = [
    
        {src: "../../../public/images/menu_tematico/bannerbts1.jpg", alt: "Opcion 2"},
        {src: "../../../public/images/menu_tematico/bannerbts2.jpg", alt: "Opcion 2"},
        {src: "../../../public/images/menu_tematico/bannerbts3.jpg", alt: "Opcion 2"},
    ];


     // Cargar los paquetes del menú temático
  useEffect(() => {
    fetch('/data/menutematico.json')
      .then(response => response.json())
      .then(data => setPaquetes(data))
      .catch(error => console.error('Error al cargar los datos del menú temático', error));
  }, []);

  // Cambiar automáticamente el banner cada 10 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceBanner((prev) => (prev + 1) % imagenesBanner.length);
    }, 10000);
    return () => clearInterval(intervalo);
  }, [imagenesBanner.length]);

    const buyProducts = (product) => {
      setCart([...carrito, product])
      console.log(product);
      
    }
   
    return (
        <>
           
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


            <div className="contenedor-menu-tematico">
                {paquetes.map((item) => (
                    <TarjetaMenuTematico
                        key={item.id}
                        id={item.id}
                        nombre={item.Paquete}
                        precio={item.Precio}
                        descripcion={item.Descripción}
                        imagen={item.Imagen}
                        onAddToCart ={ buyProducts}
                    />
                ))}
            </div>
           
        </>
    );
};


export { Menu_Tematico };