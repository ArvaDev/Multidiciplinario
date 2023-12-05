import './Footer.css'
import { data } from '../../assets/data/data'
import LinksForPos from '../atoms/LinksForPos'

function Footer() {
    return (
        <div className='FooterClass'>
            <div className='FooterClassCont'>
                <div className='FooterClassInfo'>
                    <h2>Sitio</h2>
                    <LinksForPos text={data.header.menu[0]} url="/Home"/>
                    <LinksForPos text={data.header.menu[1]}/>
                    <LinksForPos text={data.header.menu[2]} url="/About"/>
                    <LinksForPos text={data.header.menu[3]} url="/Form"/>
                    <LinksForPos text={data.header.menu[4]}/>
                </div>
                <div className='FooterClassInfo'>
                    <h2>Contacto</h2>
                    <p>{data.SiteData.Correo}</p>
                    <p>{data.SiteData.Dir}</p>
                    <p>{data.SiteData.Tel}</p>
                </div>
            </div>
            
            <div className='FooterClassP'>2023-Pimenta Jotiquetz S.C.L </div>
        </div>
    );
}

export default Footer;