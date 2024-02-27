import ImageCard from "../molecules/ImageCard";
import InverseImageCard from "../molecules/InverseImageCard";
import { data } from "../../assets/data/data";
import './InfoCards.css'

import img1 from '../../assets/imgs/m11.jpeg'
import imgIcon1 from '../../assets/imgs/Imagenes pequeñas/cafe.jpeg'
import imgBG1 from '../../assets/imgs/m20.jpeg'
import img2 from '../../assets/imgs/m17.jpeg'
import imgIcon2 from '../../assets/imgs/Imagenes pequeñas/pimienta.jpeg'
import imgBG2 from '../../assets/imgs/m19.jpeg'

function InfoCards() {
    return ( 
        <div className="InfoClass">
            <p>Producción</p>
            <InverseImageCard imageBG={imgBG1} imageIcon={imgIcon2} btnColor="#B76E28" titulo={data.ProductosInsignia.PimientaGorda.titulo} cont={data.ProductosInsignia.PimientaGorda.resum} image={img1} url="/Pimienta"/>
            <ImageCard imageBG={imgBG2} imageIcon={imgIcon1} btnColor="#B76E28" titulo={data.ProductosInsignia.Cafe.titulo} cont={data.ProductosInsignia.Cafe.resum} image={img2} url="/Cafe"/>
        </div>
    );
}

export default InfoCards;