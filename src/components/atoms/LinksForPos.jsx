import { Link } from "react-router-dom";
import './LinksForPos.css'

function LinksForPos({url, text, tColor}) {
    return ( 
        <Link to={url}>
            <a className="HypervinClass" style={{color: tColor}}>{text}</a>
        </Link>
    );
}

export default LinksForPos;