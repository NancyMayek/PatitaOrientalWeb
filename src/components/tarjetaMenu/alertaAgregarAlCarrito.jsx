import Swal from "sweetalert2";

const alertaAgregarAlCarrito = (producto) =>{
    
    Swal.fire({
        title: " Se agrego al carrito 🛒",
        html: `
            <p style="font-size:16px; margin-bottom:10px;">
                Se agrego ${producto.nombre}.
            </p>
            <p style="font-size:14px;">
                Cantidad: ${producto.cantidad}.
            </p>
        `,
        icon: "success",
        background: '#f0f8ff',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#d679af'
    });
}

export {alertaAgregarAlCarrito};