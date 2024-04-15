import './Carrito.css'
import { useEffect, useState } from 'react';
import FormularioCompra from '../../components/UI/formularioCompra/formularioCompra';
import ProductCarrito from '../../components/UI/productCarrito/ProductCarrito'
import { FaShoppingCart } from "react-icons/fa";
export default function Carrito() {
    const [dataApi, setDataApi] = useState([]);
    const [compForm, setCompFotm] = useState('none');
    const [productArrya, setProductArrya] = useState([])
    useEffect(() => {
        function convertirJSONaObjetos(objeto) {
            for (var clave in objeto) {
                if (objeto.hasOwnProperty(clave)) {
                    try {
                        objeto[clave] = JSON.parse(objeto[clave]);
                    } catch (error) { }
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
    const comprarCarro = () => {
        setCompFotm('flex');
        const productos = [];

        const keyObj = Object.keys(localStorage);
    
        if (keyObj.length > 0) {
            keyObj.forEach(key => {
                const data = localStorage.getItem(key);
                const producto = JSON.parse(data);
                productos.push(producto);
            });
        }
        setProductArrya(productos)
    };
    
    return (
        <div className='CarritoClassP'>
            <FormularioCompra state={compForm} productos={productArrya}/>
            <div className='Header'>Carrito <FaShoppingCart /></div>
            <div className='Container'>
                {dataApi.length === 0 ? (
                    <div>Sin productos disponibles</div>
                ) : (
                    <div className='CarritoCont'>
                        <div className='ProductCont'>
                            {dataApi.map((producto, index) => (<ProductCarrito key={index} o={producto} />))}
                        </div>
                        <button onClick={comprarCarro} className='Comprar'>Comprar <FaShoppingCart /></button>
                    </div>
                )}
            </div>
        </div>
    );

}