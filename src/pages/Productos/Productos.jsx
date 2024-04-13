import { useEffect, useState } from "react";
import ProductCard from "../../components/UI/productCard/ProductCard";
import MenuHeader from "../../components/UI/menuHeader/MenuHeader"
import { getProducts } from "../../Services/Products";
import './Productos.css'

export default function Productos() {

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
 
    const keys = Object.keys(products)
    console.log(products)

    return (
        <div className="Production">
            <MenuHeader />
            <div className="Contain">
                <p className="T">Los productos de PIMIENTA JOTIQUEZ S.C.L.</p>
                <p className="C">La calidad es primero</p>
                <div className="Products">
                    { keys.map(key => (
                        <ProductCard img={products[key].imgUrl} title={products[key].name} content={products[key].description}/>
                    )) }
                </div>
            </div>
        </div>
    );
}