import './menu_tematico.css'
import React, { useEffect, useState } from "react";
import TarjetaMenuTematico from '../../components/tarjeta_menu/tarjeta_menu_tematico';

const Menu_Tematico = () => {
    const [paquetes, setPaquetes] = useState([]);
    const [indiceBanner, setIndiceBanner] = useState(0);

 const imagenesBanner = [
        { src: "https://live.staticflickr.com/65535/54563994086_1c67a80980_z.jpg", alt: "BTS" },
        { src: "https://live.staticflickr.com/65535/54564225528_e07beb9a02_c.jpg", alt: "Black Pink" },
        { src: "https://live.staticflickr.com/65535/54563994016_4af8ea5ef1_c.jpg", alt: "Twice" },
        { src: "https://live.staticflickr.com/65535/54564225823_3edbc51a60_z.jpg", alt: "EXO" },
        { src: "https://live.staticflickr.com/65535/54563994556_62ace342ac_z.jpg", alt: "Seventeen" },
        { src: "https://live.staticflickr.com/65535/54563993941_4f79efc2c0_c.jpg", alt: "SHINee" },
        { src: "https://live.staticflickr.com/65535/54564225658_d17254698b_z.jpg", alt: "TXT" },
        { src: "https://live.staticflickr.com/65535/54564175499_5448a69e49_z.jpg", alt: "Stray Kids" },
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
                {paquetes.map((item, index) => (
                    <TarjetaMenuTematico
                        key={index}
                        nombre={item.Paquete}
                        precio={item.Precio}
                        descripcion={item.Descripción}
                        imagen={item.Imagen}
                    />
                ))}
            </div>
           
        </>
    );
};


export { Menu_Tematico };