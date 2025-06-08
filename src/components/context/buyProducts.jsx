
import { useContext } from 'react';
import { Context } from './Contex';

export const useBuyProducts = () => {
    
    const buyProducts = (product) => {
        setCart([...carrito, product]);
        console.log(product);
        
    };
    
    return { buyProducts };
};