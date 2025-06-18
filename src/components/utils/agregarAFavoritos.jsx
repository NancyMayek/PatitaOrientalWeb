import { useContext } from "react";
import { contextFavoritos } from "../context/contextFavoritos";
import Swal from "sweetalert2";

export const useFavorito = () => {
  const { favorito, setFavorite } = useContext(contextFavoritos);

  const toggleFavorite = (product) => {
    setFavorite((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        Swal.fire("Platillo eliminado de favoritos");
        return prev.filter((item) => item.id !== product.id);
      } else {
        Swal.fire("Platillo agregado a favoritos");
        return [...prev, product];
      }
    });
  };

  const isFavorito = (id) => favorito.some((item) => item.id === id);

  return { favorito, toggleFavorite, isFavorito };
};
