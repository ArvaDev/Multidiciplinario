import InverseImageCard from "../inverseImageCard/InverseImageCard";
import img1 from '../../../assets/imgs/m12.jpeg'
import { data } from '../../../utils/data/data'
function HistoriaCard() {
    return (
        <div className="HistoriaContainer">
            <InverseImageCard url="/About" image={img1} titulo={data.AcercaDe.titulo} cont={data.AcercaDe.resum}/>
        </div>
    );
}
export default HistoriaCard;