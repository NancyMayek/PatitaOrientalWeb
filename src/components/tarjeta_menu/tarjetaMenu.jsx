import './tarjeta_menu.css';
import iconoResta from '../../../public/images/iconos/icono-menos.svg';
import iconoMas from '../../../public/images/iconos/icono-mas.svg';
import iconoCorazon from '../../../public/images/iconos/icono-corazon-negro.svg';
import { useState } from 'react';

const TarjetaMenu = ({ imagen, nombre, precio, descripcion, onAddToCart, id, onAddToFavorites }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = (maxValue) => {
    if (count < maxValue) setCount(count + 1);
  };

  const handleDecrement = (minValue) => {
    if (count > minValue) setCount(count - 1);
  };

  return (
    <div className="contenedor-tarjeta-menu">
      <div className="contenedor-producto">
        <img src={imagen} alt={`imagen de ${nombre}`} />
        <div className="contenedor-info-producto">
          <h1 className="titulo-comida">{nombre}</h1>
          <h3 className="precio-comida">${precio}.00 Mx</h3>
          <p className="descripcion-comida">{descripcion}</p>
        </div>
      </div>
      <div className="contenedor-botones-menu">
        <button onClick={() => handleDecrement(1)}>
          <img className="icono-resta" srcSet={iconoResta} alt="icono menos" />
        </button>
        <p className="cantidad-articulos">{count}</p>
        <button onClick={() => handleIncrement(10)}>
          <img className="icono-suma" srcSet={iconoMas} alt="icono más" />
        </button>
        <button onClick={() => onAddToCart({ imagen, nombre, precio, descripcion, cantidad: count, id })}>
          <h3 className="añadir-comida">Añadir</h3>
        </button>
        <button onClick={() => onAddToFavorites({ imagen, nombre, precio, descripcion, id })}>
          <img className="icono-corazon-rojo" srcSet={iconoCorazon} alt="icono corazón" />
        </button>
      </div>
    </div>
  );
};

export default TarjetaMenu;
