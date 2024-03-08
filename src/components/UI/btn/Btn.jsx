import { Link } from 'react-router-dom';
import './Btn.css'

function Btn({url, text, type, color = "black", w, cssClass}) {
    return (
        <Link to={url}>
            <button className={cssClass + " BtnClass"} type={type} style={{background: color, border: color, width: w}}>{text}</button>
        </Link>
    );
}

export default Btn;