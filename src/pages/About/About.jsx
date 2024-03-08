import './About.css';
import MenuHeader from '../../components/UI/menuHeader/MenuHeader';
import { data } from '../../utils/data/data'
import Btn from '../../components/UI/btn/Btn';
import img1 from '../../assets/imgs/m12.jpeg';
import imgIcon1 from '../../assets/imgs/Imagenes pequeñas/pimienta.jpeg'
import imgIcon2 from '../../assets/imgs/Imagenes pequeñas/cafe.jpeg'

function About() {

    return (
        <>
            <MenuHeader/>
            <div className='AboutPageClass'>
                <div className='AContainClass'>
                    <div className='info'>
                        <h3 style={{fontSize: "40px"}}>PIMIENTA JOTIQUEZ S.C.L.</h3>
                        <div className='infoImgs'>
                            <img src={imgIcon1} width={75}></img>
                            <img src={imgIcon2} width={75}></img>
                        </div>
                        <p style={{fontSize: "15px"}}>{data.AcercaDe.cont}</p>
                        <Btn url="/Form" text="Contacto" />
                    </div>
                    <div className='ImagesAClass'>
                        <img src={img1} className='ImagesAClassImg'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;