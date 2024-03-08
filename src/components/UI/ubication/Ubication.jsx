import './Ubicacion.css'
import { data } from '../../../utils/data/data'

import { FaFacebook } from "react-icons/fa";
import Map from '../map/Map'

function Ubicacion() {
    return ( 
        <div className="Ubication">
            <div className='UbData'>
                <h2>Reprecentante</h2>
                <h3>{data.SiteData.Reprecentante}</h3>
                <h2>Correo</h2>
                <h3>{data.SiteData.Correo}</h3>
                <h2>Telefono</h2>
                <h3>{data.SiteData.Tel}</h3>
                <h2 className='Contactos'><a target="_blank" href='https://www.facebook.com/pages/Sociedad-Cooperativa-Pimienta-Jotiquez-Sc-L/1663220450606935'><FaFacebook/></a></h2>
            </div>
            <div className='UbMap'>
                <Map position={[17.0900690,-93.2078251]} zoom={16}/>
            </div>
        </div>
    );
}

export default Ubicacion;