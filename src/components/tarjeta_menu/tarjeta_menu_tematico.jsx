import './tarjeta_menu_tematico.css';

const TarjetaMenuTematico = ({ nombre, precio, descripcion, imagen }) => {
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
        <img className='icono-resta' src="/images/icono-menos.svg" alt="icono menos" />
        <h2 className='añadir-comida'>Añadir</h2>
        <img className='icono-suma' src="/images/icono-mas.svg" alt="icono más" />
        <img className='icono-corazon-rojo' src="/images/icono-corazon-rojo.svg" alt="icono corazón" />
      </div>
    </div>
    </>
  );
};

export default TarjetaMenuTematico;