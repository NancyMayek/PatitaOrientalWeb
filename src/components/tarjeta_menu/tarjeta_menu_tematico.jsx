import { useState } from 'react';
import iconoResta from '../../../public/images/iconos/icono-menos.svg'
import iconoMas from '../../../public/images/iconos/icono-mas.svg'
import iconoCorazon from '../../../public/images/iconos/icono-corazon-negro.svg'
import './tarjeta_menu_tematico.css';

const TarjetaMenuTematico = ({ nombre, precio, descripcion, imagen }) => {
    const [count, setCount] = useState(0);
    const handleIncrement = (maxValue) => {
        if (count < maxValue) setCount(count + 1);
        console.log("valor de count:" + count);
    }
    const handleDecrement =(minValue) =>{
        if(count > minValue) setCount(count-1);
        console.log("Valor de count."+ count);
    }


    return (
        <>
            <div className="contenedor-tarjeta-menu">
                <div className='contenido-tarjeta'>
                    <div className="contenedor-producto">
                        <img src={imagen} alt={`Imagen del paquete ${nombre}`} />
                        <div className="contenedor-info-producto">
                            <h1 className="titulo-comida">{nombre}</h1>
                            <h3 className="precio-comida">${precio}</h3>
                            <p className="descripcion-comida">{descripcion}</p>
                        </div>
                    </div>
                </div>
                <div className="contenedor-botones-menu">
                    <button>
                    <img className='icono-resta' srcSet={iconoResta} alt="icono menos"  onClick={()=> handleDecrement(0)} />
                    </button>
                    <p className='cantidad-de-paquete' >{count}</p>
                    <button>
                         <img className='icono-suma' srcSet={iconoMas} alt="icono más" onClick={()=> handleIncrement(10)} />
                    </button>
                    <h2 className='añadir-comida'>Añadir</h2>
                   
                    <img className='icono-corazon-rojo' srcSet={iconoCorazon} alt="icono corazón" />
                </div>
            </div>
        </>
    );
};

export default TarjetaMenuTematico;