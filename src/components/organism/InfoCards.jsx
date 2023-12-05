import ImageCard from "../molecules/ImageCard";
import InverseImageCard from "../molecules/InverseImageCard";
import { data } from "../../assets/data/data";
import './InfoCards.css'

import img2 from '../../assets/imgs/m11.jpeg'
import img3 from '../../assets/imgs/m17.jpeg'

function InfoCards() {
    return ( 
        <div className="InfoClass">
            <ImageCard titulo={data.AcercaDe.titulo} cont={data.AcercaDe.resum} url="/About"/>
            <h1>Producción</h1>
            <InverseImageCard titulo={data.ProductosInsignia.PimientaGorda.titulo} cont={data.ProductosInsignia.PimientaGorda.resum} image={img2} url="/Pimienta"/>
            <ImageCard titulo={data.ProductosInsignia.Cafe.titulo} cont={data.ProductosInsignia.Cafe.resum} image={img3} url="/Cafe"/>
        </div>
    );
}

export default InfoCards;