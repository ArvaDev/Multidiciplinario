import './Ubicacion.css'
import { data } from '../../../utils/data/data'

import { FaUser, FaSearchLocation, FaPhone, FaMailBulk  } from "react-icons/fa";
import Map from '../map/Map'

function Ubicacion() {
    return ( 
        <div className="Ubication">
            <div className='UbData'>
                <div><FaUser className='icon'/> <h3>Reprecentante: {data.SiteData.Reprecentante}</h3></div>
                <div><FaSearchLocation className='icon'/><h3>Direccion: {data.SiteData.Dir}</h3></div>
                <div><FaPhone className='icon'/><h3>Correo: {data.SiteData.Correo}</h3></div>
                <div><FaMailBulk className='icon'/><h3>Telefono: {data.SiteData.Tel}</h3></div>
            </div>
            <div className='UbMap'>
                <Map position={[17.0900690,-93.2078251]} zoom={16}/>
            </div>
        </div>
    );
}

export default Ubicacion;