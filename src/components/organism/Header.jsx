import './Header.css'
import image from '../../assets/imgs/Copainala.jpg'

import { data } from '../../assets/data/data'

function Header() {
    return (
        <div className="HeaderClass">
            <img src={image}></img>
            <p>{data.header.titulo}</p>
        </div>
    );
}

export default Header;