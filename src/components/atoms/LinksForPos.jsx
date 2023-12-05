import { Link } from "react-router-dom";
import './LinksForPos.css'

function LinksForPos({url, text}) {
    return ( 
        <Link to={url}>
            <a className="HypervinClass">{text}</a>
        </Link>
    );
}

export default LinksForPos;