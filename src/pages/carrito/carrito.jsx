import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './carrito.css';

const Carrito = () => {
    const productosIniciales = [
        {
            id: 1,
            nombre: "Dumplings",
            descripcion: "con carne de cerdo y tomate",
            cantidad: 1,
            precio: 19.99,
        }
    ];

    const [productos, setProductos] = useState(productosIniciales);
    const [metodoPago, setMetodoPago] = useState("");
    const navigate = useNavigate();

    const handlePagoChange = (e) => {
        setMetodoPago(e.target.value);
    };

    const actualizarCantidad = (id, delta) => {
        setProductos(productos.map(p =>
            p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + delta) } : p
        ));
    };

    const eliminarProducto = (id) => {
        const nuevosProductos = productos.filter(p => p.id !== id);
        setProductos(nuevosProductos);
    };

    const vaciarCarrito = () => {
        setProductos([]);
    };

    const handleFinalizarPedido = () => {
        alert("Tu pedido ha sido generado, pronto tu conductor estará en camino.");
    };

    const subtotal = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const envio = productos.length > 0 ? 5.0 : 0;
    const total = subtotal + envio;

    return (
        <div className="carrito-container">
            
            <div className="carrito">
                <h2>Carrito de compra</h2>
                

                {productos.length === 0 ? (
                    <div className="carrito-vacio">
                        <img
                            src="/images/carrito-imagenes/foto-carrito-vacio-.jpg"
                            alt="Carrito vacío"
                            className="img-carrito"
                        />
                        <p>Tu carrito está vacío</p>

                        <button 
                            className="boton-menu" 
                            onClick={() => navigate('/menu')}
                        >
                            ← Ir al Menú
                        </button>
                    </div>
                ) : (
                    productos.map(producto => (
                        <div className="producto" key={producto.id}>
                            <div className="detalle">
                                <strong>{producto.nombre}</strong>
                                <p>{producto.descripcion}</p>
                            </div>
                            <div className="cantidad">
                                <button onClick={() => actualizarCantidad(producto.id, -1)}>-</button>
                                <span>{producto.cantidad}</span>
                                <button onClick={() => actualizarCantidad(producto.id, 1)}>+</button>
                            </div>
                            <div className="precio">
                                ${(producto.precio * producto.cantidad).toFixed(2)}
                            </div>
                            <button 
                                className="eliminar" 
                                onClick={() => eliminarProducto(producto.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                )}

                {productos.length > 0 && (
                    <>
                        <button 
                            className="seguir" 
                            onClick={() => navigate('/menu')}
                        >
                            ← Seguir comprando
                        </button>
                        <button 
                            className="vaciar" 
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                    </>
                )}
            </div>

            {productos.length > 0 && (
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