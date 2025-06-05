
import './tarjeta_menu.css'
import iconoResta from '../../../public/images/iconos/icono-menos.svg'
import iconoMas from '../../../public/images/iconos/icono-mas.svg'
import iconoCorazon from '../../../public/images/iconos/icono-corazon-negro.svg'
import { useState } from 'react';

const TarjetaMenu = (props) => {
    const { imagen, nombre, precio, descripcion, onAddToCart, id } = props;
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
            <div className="contenedor-producto">
                <img src={imagen} alt={`imagen de ${nombre}`} />
                <div className="contenedor-info-producto">
                    <h1 className="titulo-comida">{nombre}</h1>
                    <h3 className="precio-comida">${precio}.00</h3>
                    <p className="descripcion-comida">{descripcion}</p>
                </div>
            </div>
            <div className="contenedor-botones-menu">
                <button>

                <img className='icono-resta' srcSet={iconoResta} alt="icono menos" onClick={() => handleDecrement(1)}/>
                </button>
                <p className='cantidad-articulos'>{count}</p>
                <button>
                <img  className='icono-suma' srcSet={iconoMas} alt="icono mas" onClick={()=> handleIncrement(10)} />
                </button>
                <button onClick={() => onAddToCart({imagen, nombre, precio, descripcion, cantidad: count ,id})} >
                    <h3 className='añadir-comida'>Añadir</h3>
                </button>
                <button>
                <img className='icono-corazon-rojo' srcSet={iconoCorazon} alt="icono corazon" />
                </button>
            </div>
        </div>
    );
}

export default TarjetaMenu;