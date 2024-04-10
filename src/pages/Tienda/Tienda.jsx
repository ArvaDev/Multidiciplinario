import './Tienda.css'
import MenuHeader from '../../components/UI/menuHeader/MenuHeader';
import Producto from "../../components/UI/producto/Producto";
import { getProducts } from "../../Services/Products";
import Galeria from '../../components/UI/GaleriaImg/Galeria';
import { useEffect, useState } from "react";

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

    const componentes = products.map((product) => {
        return (
            <Producto nombre={product.name} image={product.imgUrl} precio={product.price} key={product._id} />
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