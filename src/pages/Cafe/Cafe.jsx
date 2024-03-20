import './Cafe.css'
import image from '../../assets/imgs/m16.jpeg'
import Btn from '../../components/UI/btn/Btn'
import ProductoCal from '../../components/UI/productoCal/ProductoCal'
import { data } from '../../utils/data/data'

function Cafe() {
    return ( 
        <div className="CafeClass">
            <div className="ImageClassP">
                <img src={image}></img>
            </div>
            <div className='ConatainerP'>
                <h1>{data.ProductosInsignia.Cafe.titulo}</h1>
                <p>{data.ProductosInsignia.Cafe.cont}</p>
                <Btn url="/" text="Volver"/>
            </div>
            <ProductoCal producs={data.CafeData.producs} 
            paises={data.CafeData.paises} volumen={data.CafeData.volumen} 
            calidad={data.CafeData.calidad} certificados={data.CafeData.certificado} 
            prodNac={data.CafeData.prodNac} region={data.CafeData.region} 
            altura={data.CafeData.altura} precentacion={data.CafeData.precentacion}/>
        </div>
    );
}

export default Cafe;