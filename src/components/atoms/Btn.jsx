import { Link } from 'react-router-dom';
import './Btn.css'

function Btn({url, text, type}) {
    return (
        <Link to={url}>
            <button className='BtnClass' type={type}>{text}</button>
        </Link>
    );
}

export default Btn;