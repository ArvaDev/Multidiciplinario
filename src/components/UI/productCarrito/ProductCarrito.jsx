import React from 'react';
import './ProductCarrito.css';
export default function ProductCarrito({ o }) {
    const handleEliminarProducto = () => {
        location.reload()
        alert("El producto se ha eliminado")
        localStorage.removeItem(`Producto_${o[0]}`);
    };

    return (
        <div className="ProductCarritoClass">
            <img src={o[3]} />
            <div className='Contain'>
                <p>{o[0]}</p>
                <p className='Prec'>${o[1]}</p>
                <p>Cantidad de producto {o[2]}</p>
            </div>
            <button className='Eliminar' onClick={handleEliminarProducto}>x</button>
        </div>
    );
}
