import { useState } from 'react'
import ProductPage from '../../../pages/ProductPage/ProductPage'
import './Producto.css'
export default function Producto({productoObject}) {

    const [viewPage, setViewPage] = useState('none')
    const handlerPage = () => {
        setViewPage('flex')
    } 

    return (
        <div className='ProductoClass' onClick={handlerPage}>
            <ProductPage o={productoObject} view={viewPage}/>
            <div className='ContainerImg'>
                <img src={productoObject.imgUrl}></img>
            </div>
            <div className='Container'>
                <p>{productoObject.name}</p>
                <span>${productoObject.price}</span>
            </div>
        </div>
    );
}