import LinksForPos from '../atoms/LinksForPos'
import './MenuHeader.css'
import { data } from '../../assets/data/data'

function MenuHeader() {
    return (
        <div className="menuHeader">
            <h1>PIMIENTA JOTIQUEZ S.C.L.</h1>
            <div>
                <LinksForPos text={data.header.menu[0]} tColor="black" url="/"/> 
                <LinksForPos text={data.header.menu[1]} tColor="black" url="/About" />
                <LinksForPos text={data.header.menu[2]} tColor="black" />
                <LinksForPos text={data.header.menu[3]} tColor="black" />
                <LinksForPos text={data.header.menu[4]} tColor="black" />
                <LinksForPos text={data.header.menu[5]} tColor="black" />
                <LinksForPos text={data.header.menu[6]} tColor="black" url="/Form"/>
            </div>
        </div>
    );
}

export default MenuHeader;