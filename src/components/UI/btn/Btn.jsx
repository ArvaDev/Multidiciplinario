import { Link } from 'react-router-dom';
import './Btn.css'

function Btn({url, text, type, cssClass, onClick}) {
    return (
        <Link to={url}>
            <button onClick={onClick} className={cssClass + " BtnClass"} type={type}>{text}</button>
        </Link>
    );
}

export default Btn;