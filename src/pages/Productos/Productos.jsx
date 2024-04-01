import ProductCard from "../../components/UI/productCard/ProductCard";
import MenuHeader from "../../components/UI/menuHeader/MenuHeader"
import { dataApi } from '../../utils/api/dataApi'
import './Productos.css'

export default function Productos() {

    const keys = Object.keys(dataApi)

    return (
        <div className="Production">
            <MenuHeader />
            <div className="Contain">
                <p className="T">Los productos de PIMIENTA JOTIQUEZ S.C.L.</p>
                <p className="C">La calidad es primero</p>
                <div className="Products">
                    { keys.map(key => (
                        <ProductCard img={dataApi[key].imagen} title={dataApi[key].nombre} content={dataApi[key].informacion}/>
                    )) }
                </div>
            </div>
        </div>
    );
}