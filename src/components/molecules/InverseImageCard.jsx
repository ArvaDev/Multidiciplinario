import './ImageCard.css'
import Btn from '../atoms/Btn'

function ImageCard({image, titulo, cont, url}) {
    return (
        <div className="ImageCardClass">
            <div className='ContText'>
                <p className='title'>{titulo}</p>
                <p className='cont'>{cont}</p>
                <Btn text="Leer más" url={url}/>
            </div>
            <div className='InvImgClass'>
                <img src={image}></img>
            </div>
        </div>
    );
}

export default ImageCard;