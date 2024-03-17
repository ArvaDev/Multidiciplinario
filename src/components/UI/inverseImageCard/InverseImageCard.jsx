import './InverseImageCard.css'
import Btn from '../btn/Btn'

function ImageCard({ image, imageIcon, imageBG, titulo, cont, url }) {
    return (
        <div className='ImageCardTotalContainerI'>
            <div className="ImageCardClassI">
                <div className='ContTextI'>
                    <p className='titleI'>{titulo}</p>
                    <p className='contI'>{cont}</p>
                    <div className='BtnContainerI'>
                        <Btn text="Leer más" url={url} cssClass="CardImgBtn"/>
                        <img className='imgIconI' src={imageIcon} height="100"></img>
                    </div>
                </div>
                <div className='InvImgClass'>
                    <img src={image}></img>
                </div>
            </div>
            <img className='imgBGI' src={imageBG}/>
        </div>
    );
}
export default ImageCard;