import './Products.css'
import ProductCard from '../molecules/ProductCard';
import { useState, useEffect } from 'react';

function Products() {

    const [DataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        fetch('http://52.45.183.82:3000/api/producto')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`La solicitud falló con el código ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log (data);
                setDataProduct(data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

   

    return (
        <div className='ProductClass'>
            <p className='PCClassNP'>Nuestros Productos</p>
            <div className='PCClassItems'>
               {
                DataProduct.map (item =>{
                    return (
                        <>
                            <ProductCard  titulo={item.nombre} complemento={item.marca} imagen={item.url} ></ProductCard>
                        </>
                    );
                })
               }
            </div>
        </div>
    );
}

export default Products;