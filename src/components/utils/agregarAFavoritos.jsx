import { useContext } from "react";
import { contextFavoritos } from "../context/contextFavoritos";
import Swal from 'sweetalert2';

export const useFavorito = () =>{

    const { favorito, setFavorite } = useContext(contextFavoritos);

      const favoriteProducts = (product) => {
        setFavorite(prevFavorite => {
            const existing = prevFavorite.find(item => item.id === product.id);
            if(existing){
                Swal.fire("Este platillo ya esta en tus favoritos")
                return prevFavorite;
            }
            Swal.fire("Platillo agregado a favoritos");
            return [... prevFavorite, product]
        });
      };
    
    return {favorito, favoriteProducts}
}
