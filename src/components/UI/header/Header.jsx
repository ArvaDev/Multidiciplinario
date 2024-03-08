import './Header.css'
import image from '../../../assets/imgs/Copainala.jpg'
import { data } from '../../../utils/data/data'

function Header() {
    return (
        <div className="HeaderClass">
            <img src={image}></img>
            <p>{data.header.titulo}</p>
        </div>
    );
}

export default Header;