import './Carrito.css';
import React, { useState, useEffect } from 'react';
import ProductCarrito from '../productCarrito/ProductCarrito';
import { TbShoppingCartCheck } from "react-icons/tb";
export default function Carrito() {
    const [dataApi, setDataApi] = useState([]);
    let totalPrecio = 0;
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
        <div className='CarritoClass'>
            <div className='H'>Carrito</div>
            <div className='Contain'>
                {dataApi.map((producto, index) => (
                    <ProductCarrito key={index} o={producto} />
                ))}
                <div className='Total'>
                    SubTotal: ${totalPrecio.toFixed(2)}
                    <button className="Btn"><TbShoppingCartCheck /></button>
                </div>
            </div>
        </div>
    );
}
