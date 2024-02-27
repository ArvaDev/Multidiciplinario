import MenuHeader from '../components/organism/MenuHeader';
import './Form.css'
import Input from "../components/atoms/Input";
import Map from "../components/atoms/Map"
import TextArea from '../components/atoms/TextArea';
import { FaFacebook } from "react-icons/fa";

function Forms() {
    return (
        <div className='FormClass'><MenuHeader />
            <div className='totalFormContainer'>
                <form className="FormClassCont">
                    <h1>Entremos en contacto</h1>
                    <Input placeholder="Ingrese su nombre" />
                    <Input placeholder="Ingrese su e-mail" />
                    <Input placeholder="Asunto" />
                    <TextArea placeholder="Su mensaje" />
                    <button className='BtnClass' type="submit">Enviar</button>
                </form>
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

export default Forms;