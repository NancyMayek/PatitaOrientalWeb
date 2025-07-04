import React, { useState, useContext } from 'react';
import { contextFavoritos } from '../../components/context/contextFavoritos';
import TarjetaMenu from "../../components/tarjetaMenu/tarjetaMenu";
import { useCartActions } from '../../components/utils/botonDeAgregar';
import './favoritos.css';
import TarjetaMenuTematico from '../../components/tarjetaMenu/TarjetaMenuTematico';

const Favoritos = () => {

  const { favorito, setFavorite } = useContext(contextFavoritos);
  const { handleAddToCart } = useCartActions();

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
            product.name ? (
              <TarjetaMenu
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
                onAddToFavorites={eliminarFavorito}
              />
            ) : (
              <TarjetaMenuTematico
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export { Favoritos };
