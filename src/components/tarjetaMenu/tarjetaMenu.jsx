import './tarjetaMenu.css';
import iconoResta from '../../../public/images/iconos/icono-menos.svg';
import iconoMas from '../../../public/images/iconos/icono-mas.svg';
import iconoCorazon from '../../../public/images/iconos/icono-corazon-negro.svg';
import iconoCorazonRojo from '../../../public/images/iconos/icono-corazon-rojo.svg';
import { useState } from 'react';
import { useFavorito } from '../utils/agregarAFavoritos';

const TarjetaMenu = ({ imagenUrl, name, priceProduct, description, onAddToCart, id, onAddToFavorites }) => {
  const [count, setCount] = useState(1);
  const { toggleFavorite, isFavorito } = useFavorito();
  const esFavorito = isFavorito(id);

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="contenedor-tarjeta-menu">
      <div className="contenedor-producto">
        <img src={imagenUrl} alt={`imagen de ${name}`} />
        <div className="contenedor-info-producto">
          <h1 className="titulo-comida">{name}</h1>
          <h3 className="precio-comida">${priceProduct}.00 Mx</h3>
          <p className="descripcion-comida">{description}</p>
        </div>
      </div>
      <div className="contenedor-botones-menu">
        <button onClick={handleDecrement}>
          <img className="icono-resta" src={iconoResta} alt="icono menos" />
        </button>
        <p className="cantidad-articulos">{count}</p>
        <button onClick={handleIncrement}>
          <img className="icono-suma" src={iconoMas} alt="icono más" />
        </button>
        <button onClick={() => onAddToCart({ imagenUrl, name, priceProduct, description, cantidad: count, id })}>
          <h3 className="añadir-comida">Añadir</h3>
        </button>
        <button onClick={() => toggleFavorite({ imagenUrl, name, priceProduct, description, id })}>
          <img
            src={esFavorito ? iconoCorazonRojo : iconoCorazon}
            alt="Favorito"
          />
        </button>
      </div>
    </div>
  );
};

export default TarjetaMenu;
