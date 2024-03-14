import './Producto.css'
import img1 from '../../../assets/imgs/m12.jpeg'

export default function Producto({image, nombre, precio}) {
    return (
        <div className='ProductoClass'>
            <div className='ContainerImg'>
                <img src={img1}></img>
            </div>
            <div className='Container'>
                <p>{nombre}</p>
                <span>${precio}</span>
            </div>
        </div>
    );
}