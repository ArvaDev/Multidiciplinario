import './ProductCard.css'

function ProductCard({ titulo, complemento, imagen}) {
    return (
        <div className='PCClass'>
            <div className='imageClassPC'>
                <img className='PPClassImg' src={imagen}></img>
            </div>
            <p className="productsTitleClass">{titulo}</p>
            <p className="productsContClass">{complemento}</p>
        </div>
    );
}

export default ProductCard;