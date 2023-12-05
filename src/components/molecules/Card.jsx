import './Card.css'
function Card({title, cont}) {
    return (
        <div className="CardClass">
            <div className='CardCent'>
                <p className='CardTitle'>{title}</p>
            </div>
            <p className='CardCont'>{cont}</p>
        </div>
    );
}

export default Card;