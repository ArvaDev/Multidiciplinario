import './Carrito.css';
import { dataApi } from '../../../utils/api/dataApi';
import ProductCarrito from '../productCarrito/ProductCarrito';
import { TbShoppingCartCheck } from "react-icons/tb";

export default function Carrito() {
    let totalPrecio = 0;

    dataApi.forEach(producto => {
        totalPrecio += producto.precio;
    });

    return (
        <div className='CarritoClass'>
            <div className='H'>Carrito</div>
            <div className='Contain'>
                {dataApi.map((producto) => (
                    <ProductCarrito o={producto} />
                ))}

                {/* Como nota realaizar la suma de los precios segun la cantidad seleccionada */}
                <div className='Total'>
                    SubTotal: ${totalPrecio.toFixed(2)}
                    <button className="Btn"><TbShoppingCartCheck/></button>
                </div>
            </div>
        </div>
    );
}
