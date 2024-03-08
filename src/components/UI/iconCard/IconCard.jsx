import './IconCard.css'
function IconCard({texto, icono}) {
    return (
        <div className='iconCard'>
            <div className='cont'>
                {icono}
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default IconCard;