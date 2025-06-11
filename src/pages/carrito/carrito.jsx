import React, { useState, useContext } from 'react';
import { Context } from '../../components/context/Contex';
import './carrito.css';
import { Link } from 'react-router-dom';


const Carrito = () => {

    const { carrito, setCart } = useContext(Context);
    const [metodoPago, setMetodoPago] = useState("");


    const handlePagoChange = (e) => {
        setMetodoPago(e.target.value);
    };

    const actualizarCantidad = (id, delta) => {
        setCart(carrito.map(p =>
            p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + delta) } : p
        ));
    };

    const eliminarProducto = (id) => {
        const foundId = carrito.find((product) => product.id === id);

        const nuevoCarrito = carrito.filter((product) => {
            return product !== foundId
        })

        setCart(nuevoCarrito);

    };

    const vaciarCarrito = () => {
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Esta acción eliminará todos los productos del carrito.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            setCart([]);
            Swal.fire('Carrito vaciado', '', 'success');
        }
    });
};
    const handleFinalizarPedido = () => {
    Swal.fire({
        title: '🎉 ¡Pedido realizado!',
        html: `
            <p style="font-size:16px; margin-bottom:10px;">
                Tu pedido ha sido generado exitosamente.
            </p>
            <p style="font-size:14px;">
                🛵 Tu conductor estará en camino muy pronto.
            </p>
        `,
        icon: 'success',
        background: '#f0f8ff', 
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#28a745', 
        customClass: {
            popup: 'swal2-rounded',
            title: 'swal2-title-custom',
            confirmButton: 'swal2-button-custom'
        },
        showClass: {
            popup: 'swal2-show swal2-animate__fadeInDown'
        },
        hideClass: {
            popup: 'swal2-hide swal2-animate__fadeOutUp'
        },
        allowOutsideClick: false
    }).then(() => {
        setCart([]);
    });
};
    const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const envio = carrito.length > 0 ? 5.0 : 0;
    const total = subtotal + envio;


    return (
        <div className="justify-content-center carrito-container">

            <div className="container-fluid">
                <h1 className="titulo-carrito">Carrito de compra</h1>
            </div>
            <div className="carrito ">
                {carrito.length === 0 ? (
                    <div className="carrito-vacio ">
                        <img
                            src="/images/carrito-imagenes/foto-carrito-vacio-.jpg"
                            alt="Carrito vacío"
                            className="img-carrito"
                        />
                        <p>Tu carrito está vacío</p>

                        <Link to="/Menu" className="boton-menu">← Ir al Menú</Link>
                    </div>
                ) : (
                    carrito.map(product => (
                        <div className="producto" key={product.id}>
                            <div className="detalle">
                                <strong>{product.nombre}</strong>
                                <p>{product.descripcion}</p>
                            </div>
                            <div className="cantidad">
                                <button onClick={() => actualizarCantidad(product.id, -1)}>-</button>
                                <span>{product.cantidad}</span>
                                <button onClick={() => actualizarCantidad(product.id, 1)}>+</button>
                            </div>
                            <div className="precio">
                                ${(product.precio * product.cantidad).toFixed(2)}
                            </div>
                            <button className="eliminar" onClick={() => eliminarProducto(product.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))
                )}

                {carrito.length > 0 && (
                    <>
                        {/* <a href="#" className="seguir">← Seguir comprando</a> */}
                        <Link to="/Menu" className="seguir">← Seguir comprando</Link>
                        <button className="vaciar" onClick={vaciarCarrito}>Vaciar carrito</button>
                    </>
                )}
            </div>

            {carrito.length > 0 && (
                <div className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                    <p>Envío: <span>${envio.toFixed(2)}</span></p>
                    <p className="total">Total: <span>${total.toFixed(2)}</span></p>

                    <div className="metodo-pago">
                        <h4>Método de pago</h4>
                        <label>
                            <input
                                type="radio"
                                name="pago"
                                value="efectivo"
                                checked={metodoPago === "efectivo"}
                                onChange={handlePagoChange}
                            />
                            Pago en efectivo
                        </label>
                        <small>Paga al recibir tu pedido</small>

                        <label>
                            <input
                                type="radio"
                                name="pago"
                                value="transferencia"
                                checked={metodoPago === "transferencia"}
                                onChange={handlePagoChange}
                            />
                            Transferencia bancaria
                        </label>
                        <small>Realiza una transferencia a nuestra cuenta</small>

                        {metodoPago === "transferencia" && (
                            <div className="datos-transferencia">
                                <p><strong>Datos bancarios:</strong></p>
                                <p>Banco: Banorte</p>
                                <p>Cuenta: 1234567890</p>
                                <p>CLABE: 012345678901234567</p>
                                <p>Nombre: Patita Oriental S.A.</p>
                                <p><em>Envía tu comprobante al siguiente WhatsApp:</em></p>
                                <a
                                    href="https://wa.me/5211234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +52 333 356 7890
                                </a>
                            </div>
                        )}
                    </div>

                    <button
                        className="finalizar"
                        onClick={handleFinalizarPedido}
                    >
                        Realizar pedido
                    </button>
                </div>
            )}
        </div>
    );
};

export { Carrito };