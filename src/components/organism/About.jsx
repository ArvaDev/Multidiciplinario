import './About.css'
import Acciones from '../atoms/Acciones';
import { data } from '../../assets/data/data'

import { IoPeople } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdRecordVoiceOver } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

function About() {
    return (
        <div className="AboutClass">
            <div className='ContClassAbout'>
                <p className='AboutTitle'>{data.About.titulo}</p>
                <p className='AboutCont'>{data.About.info}</p>
            </div>
            <div className='AccionesClass'>
                <Acciones titulo={data.Acciones.reprecentamos[0]} cont={data.Acciones.reprecentamos[1]} image={<IoPeople/>}/>
                <Acciones titulo={data.Acciones.fomentamos[0]} cont={data.Acciones.fomentamos[1]} image={<IoChatbubblesSharp/>}/>
                <Acciones titulo={data.Acciones.promovemos[0]} cont={data.Acciones.promovemos[1]} image={<MdRecordVoiceOver/>}/>
                <Acciones titulo={data.Acciones.proponemos[0]} cont={data.Acciones.proponemos[1]} image={<AiFillLike/>}/>
            </div>
            
        </div>
    );
}

export default About;