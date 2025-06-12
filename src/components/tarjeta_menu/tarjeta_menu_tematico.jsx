import { useState } from 'react';
import iconoResta from '../../../public/images/iconos/icono-menos.svg'
import iconoMas from '../../../public/images/iconos/icono-mas.svg'
import iconoCorazon from '../../../public/images/iconos/icono-corazon-negro.svg'
import './tarjeta_menu_tematico.css';

// Componente que representa una tarjeta individual del menú temático
const TarjetaMenuTematico = ({ nombre, precio, descripcion, imagen, onAddToCart,id }) => {
    const [count, setCount] = useState(1);    // Estado local para controlar la cantidad seleccionada del producto
    const handleIncrement = (maxValue) => {    // Función para aumentar la cantidad, hasta un máximo definido (10 en este caso)
        if (count < maxValue) setCount(count + 1);
       
    }

 // Función para disminuir la cantidad, sin bajar del mínimo (0 en este caso)
    const handleDecrement =(minValue) =>{
        if(count > minValue) setCount(count-1);
    }


    return (
        <>
            {/* Sección visual del producto: imagen, nombre, precio y descripción */}
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
                {/* Sección de botones: cantidad, añadir al carrito y corazón */}
                <div className="contenedor-botones-menu">
                    <button>
                    <img className='icono-resta' srcSet={iconoResta} alt="icono menos"  onClick={()=> handleDecrement(0)} />
                    </button>
                    {/* Muestra la cantidad seleccionada */}
                    <p className='cantidad-de-paquete' >{count}</p>
                    <button> {/* Botón para aumentar la cantidad */}
                         <img className='icono-suma' srcSet={iconoMas} alt="icono más" onClick={()=> handleIncrement(10)} />
                    </button>

                 {/* Botón para añadir el producto al carrito con la cantidad seleccionada */}
                <button onClick={() => onAddToCart({imagen, nombre, precio, descripcion, cantidad: count, id})} >
                    <h3 className='añadir-comida'>Añadir</h3>
                </button>
                   {/* Icono de corazón decorativo (puedes agregar lógica para favoritos si quieres) */}
                    <img className='icono-corazon-rojo' srcSet={iconoCorazon} alt="icono corazón" />
                </div>
            </div>
        </>
    );
};
// Exportación del componente para que pueda ser usado en otros archivos
export default TarjetaMenuTematico;