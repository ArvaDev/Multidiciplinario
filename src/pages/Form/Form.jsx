import './Form.css'
import MenuHeader from '../../components/UI/menuHeader/MenuHeader';
import Input from "../../components/UI/input/Input";
import Map from "../../components/UI/map/Map"
import TextArea from '../../components/UI/textArea/TextArea';
import IconCard from '../../components/UI/iconCard/IconCard';
import { FaFacebook, FaSearchLocation, FaPhone, FaMailBulk } from "react-icons/fa";
export default function Forms() {
    return (
        <div className='FormClass'><MenuHeader />
            <div className='totalFormContainer'>
                <div className='formSection'>
                    <div className='locationCard'>
                    <h1>Contacto</h1>
                        <IconCard texto="calle primera oriente norte 136 barrio santa Ana Copainalá, Chiapas" icono={<FaSearchLocation/>}/>
                        <IconCard texto="968-661-1015 " icono={<FaPhone/>}/>
                        <IconCard texto="jotiquetz@yahoo.com.mx" icono={<FaMailBulk/>} />
                    </div>
                    <form className="FormClassCont">
                        <h1>Entremos en contacto</h1>
                        <Input placeholder="Ingrese su nombre"/>
                        <Input placeholder="Ingrese su e-mail"/>
                        <Input placeholder="Asunto"/>
                        <TextArea placeholder="Su mensaje" />
                        <button className='BtnClass' type="submit">Enviar</button>
                    </form>
                </div>
                <Map position={[17.0979818, -93.2125981]} zoom={20} />
                <div className='FooterClassContCopy'>
                    <p>isai123abel@gmail.com</p>
                    <a target="_blank" href='https://www.facebook.com/pages/Sociedad-Cooperativa-Pimienta-Jotiquez-Sc-L/1663220450606935'><FaFacebook /></a>
                    <p>©2023 por Cooperativa Pimienta Jotiquez S.C.L.</p>
                </div>
            </div>
        </div>
    );
}