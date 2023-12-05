import './Img.css'
function Image({url}) {
    return ( 
        <img src={url} className="ImageBorder"></img>
    );
}

export default Image;