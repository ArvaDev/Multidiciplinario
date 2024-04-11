import './Tienda.css'
import MenuHeader from '../../components/UI/menuHeader/MenuHeader';
import Producto from "../../components/UI/producto/Producto";
import { getProducts } from "../../Services/Products";
import Galeria from '../../components/UI/GaleriaImg/Galeria';
import { useEffect, useState } from "react";
//Es una simulación se eliminara más tarde
import { dataApi } from '../../utils/api/dataApi';

export default function Tienda() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
            const fetchProducts = async ()=>{
                try {
                const productsData = await getProducts();
                setProducts(productsData);
                } catch (error) {
                console.log(error); 
                }
            }
            fetchProducts();
    },[])
    console.log(dataApi)
    const componentes = dataApi.map((product) => {
        return (
            <Producto productoObject={product} />
        );
    });
    return (        
        <div className='TiendaClass'>
            <MenuHeader/>
            <div className='Container'> 
                <p className='T'>Explora la colección</p>
                <p className='P'>Descubra sus productos favoritos</p>
                <Galeria componentes={componentes}/>
            </div>
        </div>
    );
}