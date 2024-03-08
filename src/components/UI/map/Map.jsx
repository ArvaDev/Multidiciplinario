import { MapContainer, TileLayer} from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css'
function Mapa({position, zoom}) {
    return (
        <>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className='MapClassAction'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    );
}
export default Mapa;