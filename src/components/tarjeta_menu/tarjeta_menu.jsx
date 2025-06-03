import './tarjeta_menu.css'
import { useState } from 'react';

const TarjetaMenu = (product) => {
    const [count, setCount] = useState(1);
    const handleIncrement = (maxValue) =>{
        if(count < maxValue) setCount( count + 1);
        console.log("Valor de count: " + count);
        
    }

    const handleDecrement = (minValue) =>{
        if(count > minValue) setCount( count -1);
        console.log("Valor de count: " + count);
        
    }
    return (
       
        <div className="contenedor-tarjeta-menu">
             <br></br>
              <br></br>
            <div className="contenedor-producto">
                <img src={product.imagen} alt={`imagen de ${product.nombre}`} />
                <div className="contenedor-info-producto">
                    <h1 className="titulo-comida">{product.nombre}</h1>
                    <h3 className="precio-comida">${product.precio}.00</h3>
                    <p className="descripcion-comida">{product.descripcion}</p>
                </div>
            </div>
            <div className="contenedor-botones-menu">
                <button>
                    <img className='icono-resta' srcSet="../../../public/images/iconos/icono-menos.svg" alt="icono menos" onClick={() => handleDecrement(1)}/>
                </button>
                <p className='cantidad-articulos'>{count}</p>
                <button>
                    <img  className='icono-suma' srcSet="../../../public/images/iconos/icono-mas.svg" alt="icono mas" onClick={()=> handleIncrement(10)} />
                </button>
                <button /* onClick={() => buyProducts(product)} */>
                    <h3 className='añadir-comida'>Añadir</h3>
                </button>
                <button>
                    <img className='icono-corazon-rojo' srcSet="../../../public/images/iconos/icono-corazon-negro.svg" alt="icono corazon" />
                </button>
            </div>
        </div>
    );
}

export default TarjetaMenu;