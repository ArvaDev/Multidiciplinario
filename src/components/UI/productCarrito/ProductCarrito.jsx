import './ProductCarrito.css'
export default function ProductCarrito({o}) {
    return (
        <div className="ProductCarritoClass">
            <img src={o.imagen}></img>
            <div className='Contain'>
                <p>{o.nombre}</p>
                <p className='Prec'>${o.precio}</p>
                <input className='Cont' type='number' min="0"></input>
            </div>
            <button className='Eliminar'>x</button>
        </div>
    );
}