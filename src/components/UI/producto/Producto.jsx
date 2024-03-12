import './Producto.css'
import img1 from '../../../assets/imgs/m12.jpeg'

function Producto({image, nombre, precio}) {
    return (
        <div className='ProductoClass'>
            <div className='ContainerImg'>
                <img src={img1}></img>
            </div>
            <div className='Container'>
                <p>Cafe claro</p>
                <span>$12.5</span>
            </div>
        </div>
    );
}

export default Producto;