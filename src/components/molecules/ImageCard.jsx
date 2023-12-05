import './ImageCard.css'
import Btn from '../atoms/Btn'

function ImageCard({image, cont, titulo, url}) {
    return (
        <div className="ImageCardClass">
            <div className='ImgClass'>
                <img src={image}></img>
            </div>
            <div className='ContText'>
                <p className='title'>{titulo}</p>
                <p className='cont'>{cont}</p>
                <Btn text="Leer más" url={url}/>
            </div>
        </div>
    );
}

export default ImageCard;