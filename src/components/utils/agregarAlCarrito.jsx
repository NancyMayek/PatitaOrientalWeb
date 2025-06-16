import { useContext } from 'react';
import { Context } from '../context/Contex';

export const useCart = () => {
  const { carrito, setCart } = useContext(Context);
  
  const buyProducts = (product) => {
    /* Manejo de cantidades  */
    setCart(prevCart => { // prevCart busca si el producto ya existe en el carrito actual 
    const existing = prevCart.find(item => item.id === product.id);
    if (existing) {
      return prevCart.map(item =>
        item.id === product.id 
          ? { ...item, cantidad: item.cantidad + 1 } 
          : item
      );
    }
    return [...prevCart, { ...product, cantidad: product.cantidad }];
  });
  };

  return { carrito, buyProducts };
};