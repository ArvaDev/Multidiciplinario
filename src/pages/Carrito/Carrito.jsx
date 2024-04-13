import './Carrito.css'
import { useEffect, useState } from 'react';
import ProductCarrito from '../../components/UI/productCarrito/ProductCarrito'
import { FaShoppingCart } from "react-icons/fa";
export default function Carrito() {
    const [dataApi, setDataApi] = useState([]);
    useEffect(() => {
        function convertirJSONaObjetos(objeto) {
            for (var clave in objeto) {
                if (objeto.hasOwnProperty(clave)) {
                    try {
                        objeto[clave] = JSON.parse(objeto[clave]);
                    } catch (error) {}
                }
            }
            return objeto;
        }
        var localStorageMap = {};
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            const valor = localStorage.getItem(clave);
            localStorageMap[clave] = valor;
        }
        localStorageMap = convertirJSONaObjetos(localStorageMap);
        console.log(localStorageMap);
        setDataApi(Object.values(localStorageMap));
    }, []);

    return (
        <div className='CarritoClassP'>
            <div className='Header'>Carrito <FaShoppingCart/></div>
            <div className='Container'>
                {dataApi.map((producto, index) => (
                    <ProductCarrito key={index} o={producto} />
                ))}
            </div>
        </div>
    );
}