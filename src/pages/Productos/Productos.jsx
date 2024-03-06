import ProductCard from "../../components/UI/productCard/ProductCard";
import MenuHeader from "../../components/organism/MenuHeader"
import './Productos.css'
import img from "../../assets/imgs/m1.jpeg"
export default function Productos() {
    return (
        <div className="Production">
            <MenuHeader />
            <div className="Contain">
                <p className="T">Los productos de PIMIENTA JOTIQUEZ S.C.L.</p>
                <p className="C">La calidad es primero</p>
                <div className="Products">
                    {/* Estos son solo ejemplos, eliminar más tarde */}
                    <ProductCard img={img} title="TYUIOP" content="dhvwirvniwhe ehfiwhe uwefuhweuf ue rfuwh euhf wefhwhfeo ewihfuwhefhef ofwhefhefh wieuhfwef ewhufegfw" />
                    <ProductCard img={img} title="TYUIOP" content="dhvwirvniwhe ehfiwhe uwefuhweuf ue rfuwh euhf wefhwhfeo ewihfuwhefhef ofwhefhefh wieuhfwef ewhufegfw" />
                    <ProductCard img={img} title="TYUIOP" content="dhvwirvniwhe ehfiwhe uwefuhweuf ue rfuwh euhf wefhwhfeo ewihfuwhefhef ofwhefhefh wieuhfwef ewhufegfw" />
                    <ProductCard img={img} title="TYUIOP" content="dhvwirvniwhe ehfiwhe uwefuhweuf ue rfuwh euhf wefhwhfeo ewihfuwhefhef ofwhefhefh wieuhfwef ewhufegfw" />
                </div>
            </div>
        </div>
    );
}