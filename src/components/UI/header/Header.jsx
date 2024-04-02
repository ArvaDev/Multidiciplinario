import './Header.css'
import image from '../../../assets/imgs/Copainala.jpg'
import { data } from '../../../utils/data/data'

function Header() {
    return (
        <div className="HeaderClass">
            <img src={image} width={100}></img>
            <p>{data.header.titulo}</p>
        </div>
    );
}

export default Header;