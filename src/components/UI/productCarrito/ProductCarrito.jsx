import React from 'react';
import './ProductCarrito.css';
export default function ProductCarrito({ o }) {
    const handleEliminarProducto = () => {
        location.reload()
        alert("El producto se ha eliminado")
        localStorage.removeItem(`Producto_${o.name}`);
    };
    return (
        <div className="ProductCarritoClass">
            <img src={o.imgUrl} />
            <div className='Contain'>
                <p>{o.name}</p>
                <p className='Prec'>${o.price}</p>
                <p>Cantidad de producto {o.amount}</p>
            </div>
            <button className='Eliminar' onClick={handleEliminarProducto}>x</button>
        </div>
    );
}
