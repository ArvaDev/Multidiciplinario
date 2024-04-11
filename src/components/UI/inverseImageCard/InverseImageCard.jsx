import './InverseImageCard.css'
import Btn from '../btn/Btn'

function ImageCard({ image, imageIcon, imageBG, titulo, cont, url, subtitle, custoClass}) {
    return (
        <div className={`ImageCardTotalContainerI ${custoClass}`} style={{backgroundImage: `url(${imageBG})`}}>
            <div className="ImageCardClassI">
                <div className='ContTextI'>
                    <p className='titleI'>{titulo}</p>
                    <p className='subtitleIN'> {subtitle} </p>
                    <p className='contI'>{cont}</p>
                    <div className='BtnContainerI'>
                        <Btn text="Leer más" url={url} cssClass="CardImgBtn"/>
                        <img className='imgIconI' src={imageIcon} height="100"></img>
                    </div>
                </div>
                <div className='InvImgClass'>
                    <img src={image} className='img-card-historia'></img>
                </div>
            </div>
        </div>
    );
}
export default ImageCard;