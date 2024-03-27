import './Tienda.css'
import MenuHeader from '../../components/UI/menuHeader/MenuHeader';
import Carrusel from '../../components/UI/carrusel/Carrusel';
import Producto from "../../components/UI/producto/Producto";
import { dataApi } from '../../utils/api/dataApi'

export default function Tienda() {
    const keys = Object.keys(dataApi);

    const componentes = keys.map((key) => {
        const productoData = dataApi[key];
        return (
            <Producto nombre={productoData.nombre} image={productoData.imagen} precio={productoData.precio} />
        );
    });

    return (        
        <div className='TiendaClass'>
            <MenuHeader/>
            <div className='Container'> 
                <p className='T'>Explora la colección</p>
                <p className='P'>Descubra sus productos favoritos</p>
                <Carrusel componentes={componentes}/>
            </div>
        </div>
    );
}