import './Footer.css'
import { data } from '../../assets/data/data'
import LinksForPos from '../atoms/LinksForPos'

function Footer() {
    return (
        <div className='FooterClass'>
            <div className='FooterClassCont'>
                <div className='FooterClassInfo'>
                    <p className='titleFoot'>Quienes somos</p>
                    <LinksForPos text={data.header.menu[1]} tColor="white"/>
                    <LinksForPos text={data.header.menu[2]} url="/About" tColor="white"/>
                </div>
                <div className='FooterClassInfo'>
                    <p className='titleFoot'>Localidades</p>
                    <p>{data.footer.localidades[0]}</p>
                    <p>{data.footer.localidades[1]}</p>
                    <p>{data.footer.localidades[2]}</p>
                </div>
                <div className='FooterClassInfo'>
                    <p className='titleFoot'>Información legal</p>
                    <LinksForPos text={data.footer.legalidad[0]} tColor="white"/>
                    <LinksForPos text={data.footer.legalidad[1]} tColor="white"/>
                    <LinksForPos text={data.footer.legalidad[2]} tColor="white"/>
                </div>
            </div>
            
            <div className='FooterClassP'>2023-Pimenta Jotiquetz S.C.L </div>
        </div>
    );
}

export default Footer;