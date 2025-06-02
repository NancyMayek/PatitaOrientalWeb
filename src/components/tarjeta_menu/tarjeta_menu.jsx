import './tarjeta_menu.css'
import { useState } from 'react';

const TarjetaMenu = ({nombre,precio,descripcion,imagen}) => {
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
                <img src={imagen} alt={`imagen de ${nombre}`} />
                <div className="contenedor-info-producto">
                    <h1 className="titulo-comida">{nombre}</h1>
                    <h3 className="precio-comida">${precio}.00</h3>
                    <p className="descripcion-comida">{descripcion}</p>
                </div>
            </div>
            <div className="contenedor-botones-menu">
                <img className='icono-resta' srcSet="../../../public/images/iconos/icono-menos.svg" alt="icono menos" onClick={() => handleDecrement(1)}/>
                <h3 className='añadir-comida'>Añadir</h3>
                <img  className='icono-suma' srcSet="../../../public/images/iconos/icono-mas.svg" alt="icono mas" onClick={()=> handleIncrement(10)} />
                <img className='icono-corazon-rojo' srcSet="../../../public/images/iconos/icono-corazon-negro.svg" alt="icono corazon" />
            </div>
        </div>
    );
}

export default TarjetaMenu;