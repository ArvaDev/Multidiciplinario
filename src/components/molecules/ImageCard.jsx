import './ImageCard.css'
import Btn from '../atoms/Btn'

function ImageCard({ image, imageBG, imageIcon, cont, titulo, url, btnColor }) {
    return (
        <div className='ImageCardTotalContainer'>
            <div className="ImageCardClass">
                <div className='ImgClass'>
                    <img className='imgDem' src={image}></img>
                </div>
                <div className='ContText'>
                    <p className='title'>{titulo}</p>
                    <p className='cont'>{cont}</p>
                    <div className='BtnContainer'>
                        <Btn text="Leer más" w="150px" color={btnColor} url={url} />
                        <img className='imgIcon' src={imageIcon} height="100"></img>
                    </div>
                </div>
            </div>
            <img className='imgBG' src={imageBG} />
        </div>
    );
}

export default ImageCard;