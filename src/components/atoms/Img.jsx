import './Img.css'
function Image({url, size}) {
    return ( 
        <img src={url} className="ImageBorder" style={{height: size}}></img>
    );
}
export default Image;