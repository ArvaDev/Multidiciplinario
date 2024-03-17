import { Link } from 'react-router-dom';
import './Btn.css'

function Btn({url, text, type, cssClass}) {
    return (
        <Link to={url}>
            <button className={cssClass + " BtnClass"} type={type}>{text}</button>
        </Link>
    );
}

export default Btn;