import './Carrito.css';
import { dataApi } from '../../../utils/api/dataApi';
import ProductCarrito from '../productCarrito/ProductCarrito';

export default function Carrito() {
    // Variable para almacenar la suma de los precios
    let totalPrecio = 0;

    // Iterar sobre los productos de la API y calcular la suma de los precios
    dataApi.forEach(producto => {
        // Suponiendo que cada producto tiene una propiedad 'precio'
        totalPrecio += producto.precio;
    });

    return (
        <div className='CarritoClass'>
            <div className='H'>Carrito</div>
            <div className='Contain'>
                {dataApi.map((producto, index) => (
                    <ProductCarrito key={index} o={producto} />
                ))}

                {/* Como nota realaizar la suma de los precios segun la cantidad seleccionada */}
                <div className='Total'>SubTotal: ${totalPrecio.toFixed(2)}</div>
            </div>
        </div>
    );
}
