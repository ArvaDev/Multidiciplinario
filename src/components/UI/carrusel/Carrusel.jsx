import './Carrusel.css'
import Producto from "../producto/Producto";

function Carrusel() {
    return (
        <div className='CarruselClass'>
            <button>{'<'}</button>
            <div className='Container'>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
            </div>
            <button>{'>'}</button>
        </div>
    );
}

export default Carrusel;