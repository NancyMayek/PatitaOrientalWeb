import React, { useState } from 'react';
import './favoritos.css';

const Favoritos = () => {
  // Estado simulado con algunos productos favoritos
  const [favoritos, setFavoritos] = useState([
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', imagen: '/ruta/imagen1.jpg' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', imagen: '/ruta/imagen2.jpg' },
    // Agrega más si quieres
  ]);

  // Función para eliminar un favorito
  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter(item => item.id !== id));
  };

  return (
    <div className="favoritos-container">
        <div className="container-fluid">
                <h1 className="titulo-favoritos">Mis Favoritos</h1>
            </div>

      {favoritos.length === 0 ? (
        <p>No tienes favoritos aún.</p>
      ) : (
        <div className="favoritos-grid">
          {favoritos.map(item => (
            <div className="favorito-card" key={item.id}>
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
              <button onClick={() => eliminarFavorito(item.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Favoritos };
