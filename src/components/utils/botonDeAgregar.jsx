import { useCart } from "./agregarAlCarrito";
import {alertaAgregarAlCarrito} from "../tarjeta_menu/alertaAgregarAlCarrito"

export const useCartActions = () => {
    const { buyProducts } = useCart(); // Importamos la funcion de buyProducts

    const handleAddToCart = (product) => {
        buyProducts(product);
        alertaAgregarAlCarrito(product);
    };

    return { handleAddToCart };
};






