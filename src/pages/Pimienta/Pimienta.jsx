import './Pimienta.css'
import image from '../../assets/imgs/m11.jpeg'
import Btn from '../../components/UI/btn/Btn'
import ProductoCal from '../../components/UI/productoCal/ProductoCal'
import { data } from '../../utils/data/data'

function Pimienta() {
    return (
        <div className="PimientaClass">
            <div className="ImageClassP">
                <img src={image}></img>
            </div>
            <div className='ConatainerP'>
                <h1>{data.ProductosInsignia.PimientaGorda.titulo}</h1>
                <p>{data.ProductosInsignia.PimientaGorda.cont}</p>
                <Btn url="/" text="Volver" />
            </div>
            <ProductoCal producs={data.PimientaData.producs}
                paises={data.PimientaData.paises} volumen={data.PimientaData.volumen}
                calidad={data.PimientaData.calidad} certificados={data.PimientaData.certificado}
                prodNac={data.PimientaData.prodNac} region={data.PimientaData.region}
                altura={data.PimientaData.altura} precentacion={data.PimientaData.precentacion} />
        </div>
    );
}

export default Pimienta;