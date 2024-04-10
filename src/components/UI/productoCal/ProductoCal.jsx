import './ProductoCal.css'
import {Map, Database, Share, Star, Certification, Location, Near, National, Presentation} from "../../Icons/IconsFooter"
function ProductoCal({producs, paises, volumen, calidad, certificados, prodNac, region, altura, precentacion}) {
    return (
        <div className="ProductoCalClass">
            <div className='Column'>
               <li className='items-footer'> <Share/> <h2>Productos de exportación</h2> </li>
                <p>{producs}</p>
                <li className='items-footer'> <Map/> <h2>Países</h2></li>
                <p>{paises}</p>
                <li className='items-footer'> <Database/><h2>Volumen</h2></li>
                <p>{volumen}</p>
                <li className='items-footer'> <Star/><h2>Calidades</h2></li>
                <p>{calidad}</p>
                <li className='items-footer'> <Certification/><h2>Certificados</h2></li>
                <p>{certificados}</p>
            </div>
            <div className='Column'>
            <li className='items-footer'> <National/> <h2>Productos nacionales</h2> </li>
              
                <p>{prodNac}</p>
                <li className='items-footer'> <Location/><h2>Región</h2></li>
                <p>{region}</p>
                <li className='items-footer'> <Near/><h2>Altura</h2></li>
                <p>{altura}</p>
                <li className='items-footer'> <Presentation/> <h2>Precentación</h2></li>
                <p>{precentacion}</p>
            </div>
        </div>
    );
}

export default ProductoCal;