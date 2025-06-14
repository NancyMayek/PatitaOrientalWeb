import React, { useState,useContext } from 'react';
import { contextFavoritos } from '../../components/context/contextFavoritos';
import './favoritos.css';

const Favoritos = () => {
  // Estado simulado con algunos productos favoritos
/*   const [favoritos, setFavoritos] = useState([
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', imagen: '/ruta/imagen1.jpg' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', imagen: '/ruta/imagen2.jpg' },
    // Agrega más si quieres
  ]); */

  const { favorito, setFavorite } = useContext(contextFavoritos);

  // Función para eliminar un favorito
  const eliminarFavorito = (id) => {
    setFavorite(favorito.filter(product => product.id !== id));
  };

  return (
    <div className="favoritos-container">
        <div className="container-fluid">
                <h1 className="titulo-favoritos">Mis Favoritos</h1>
            </div>

      {favorito.length === 0 ? (
        <p>No tienes favoritos aún.</p>
      ) : (
        <div className="favoritos-grid">
          {favorito.map(product => (
            <div className="favorito-card" key={product.id}>
              <img src={product.imagen} alt={product.nombre} />
              <h3>{product.nombre}</h3>
              <p>{product.descripcion}</p>
              <button onClick={() => eliminarFavorito(product.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Favoritos };
