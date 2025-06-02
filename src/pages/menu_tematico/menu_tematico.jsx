import './menu_tematico.css'
import React, { useEffect, useState } from "react";
import TarjetaMenuTematico from '../../components/tarjeta_menu/tarjeta_menu_tematico';

const Menu_Tematico = () => {
    const [paquetes, setPaquetes] = useState([]);
    const [indiceBanner, setIndiceBanner] = useState(0);

 const imagenesBanner = [
        { src: "/images/Images_MTematico/bannerbangtan.jpg", alt: "BTS" },
        { src: "/images/Images_MTematico/bannerblack.jpg", alt: "Black Pink" },
        { src: "/images/Images_MTematico/bannertwice.jpg", alt: "Twice" },
        { src: "/images/Images_MTematico/bannerexo.jpg", alt: "EXO" },
        { src: "/images/Images_MTematico/bannerseventeen.jpg", alt: "Seventeen" },
        { src: "/images/Images_MTematico/bannershinne.jpg", alt: "SHINee" },
        { src: "/images/Images_MTematico/bannertxt.jpg", alt: "TXT" },
        { src: "/images/Images_MTematico/bannerstray.jpg", alt: "Stray Kids" },
    ];


     // Cargar los paquetes del menú temático
  useEffect(() => {
    fetch('/data/menuTematico.json')
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
                        imagen={item.Images}
                    />
                ))}
            </div>
           
        </>
    );
};

export default Menu_Tematico;