import './Header.css'
import image from '../../assets/imgs/Copainala.jpg'

import { data } from '../../assets/data/data'
import LinksForPos from '../atoms/LinksForPos'

function Header() {
    return (
        <div className="HeaderClass">
            <img src={image}></img>
            <div className='HeaderMenu'>
                <LinksForPos text={data.header.menu[0]}/>
                <LinksForPos text={data.header.menu[1]}/>
                <LinksForPos text={data.header.menu[2]} url="/About"/>
                <LinksForPos text={data.header.menu[3]} url="/Form"/>
                <LinksForPos text={data.header.menu[4]}/>
                <LinksForPos text={data.header.menu[5]}/>
            </div>
            <p>{data.header.titulo}</p>
        </div>
    );
}

export default Header;