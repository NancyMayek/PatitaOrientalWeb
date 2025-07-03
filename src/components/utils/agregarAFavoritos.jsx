import { useContext } from "react";
import { contextFavoritos } from "../context/contextFavoritos";
import Swal from "sweetalert2";

export const useFavorito = () => {
  const { favorito, setFavorite } = useContext(contextFavoritos);

  const toggleFavorite = (product) => {
    setFavorite((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
  Swal.fire({
    title: '¡Eliminado!',
    text: 'Platillo eliminado de favoritos 🖤',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#d679af',
    background: '#f0f8ff',
    color: '#333',
  });
  return prev.filter((item) => item.id !== product.id);
} else {
  Swal.fire({
    title: '¡Agregado!',
    text: 'Platillo agregado a favoritos 💖',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#d679af',
    background: '#f0f8ff',
    color: '#333',
  });
  return [...prev, product];
}

    });
  };

  const isFavorito = (id) => favorito.some((item) => item.id === id);

  return { favorito, toggleFavorite, isFavorito };
};
