import './Producto.css'

export default function Producto({image, nombre, precio}) {
    return (
        <div className='ProductoClass'>
            <div className='ContainerImg'>
                <img src={image}></img>
            </div>
            <div className='Container'>
                <p>{nombre}</p>
                <span>${precio}</span>
            </div>
        </div>
    );
}