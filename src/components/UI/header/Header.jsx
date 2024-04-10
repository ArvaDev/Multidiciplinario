import './Header.css'
import image from '../../../assets/imgs/Copainala.jpg'
import { data } from '../../../utils/data/data'

function Header() {
    return (
        <div className="HeaderClass">
            <p>{data.header.titulo}</p>
        </div>
    );
}

export default Header;