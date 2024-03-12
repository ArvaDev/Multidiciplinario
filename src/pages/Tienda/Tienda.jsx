import './Tienda.css'
import MenuHeader from '../../components/UI/menuHeader/MenuHeader';
import Carrusel from '../../components/UI/carrusel/Carrusel';

function Tienda() {
    return (
        <div className='TiendaClass'>
            <MenuHeader/>
            <div className='Container'> 
                <p className='T'>Explora la colección</p>
                <p className='P'>Descubra sus productos favoritos</p>
                <Carrusel/>
            </div>
        </div>
    );
}

export default Tienda;