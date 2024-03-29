import './PimientaCafe.css'
import ImageCard from "../imageCard/ImageCard";
import InverseImageCard from "../inverseImageCard/InverseImageCard"
import img1 from '../../../assets/imgs/m11.jpeg'
import imgIcon1 from '../../../assets/imgs/Imagenes pequeñas/cafe.jpeg'
import imgBG1 from '../../../assets/imgs/m20.jpeg'
import img2 from '../../../assets/imgs/m17.jpeg'
import imgIcon2 from '../../../assets/imgs/Imagenes pequeñas/pimienta.jpeg'
import imgBG2 from '../../../assets/imgs/m19.jpeg'
import { data } from "../../../utils/data/data";
function InfoCards() {
    return ( 
        <div className="InfoClass">
            <p>Producción</p>
            <InverseImageCard imageBG={imgBG1} imageIcon={imgIcon2} titulo={data.ProductosInsignia.PimientaGorda.titulo} cont={data.ProductosInsignia.PimientaGorda.resum} image={img1} url="/Pimienta"/>
            <ImageCard imageBG={imgBG2} imageIcon={imgIcon1} titulo={data.ProductosInsignia.Cafe.titulo} cont={data.ProductosInsignia.Cafe.resum} image={img2} url="/Cafe"/>
        </div>
    );
}

export default InfoCards;