import './Carrusel.css'
import { useState } from 'react';

export default function Carrusel({ componentes }) {
    const [cardIndex, setCardIndex] = useState(0);
    console.log(window.innerWidth)
    const cardsToShow = window.innerWidth <= 1243 ? 2 : 4;
    const previusCard = () => {
        const newIndex = Math.max(0, cardIndex - 1);
        setCardIndex(newIndex);
    };
    const goToNextSlide = () => {
        const newIndex = Math.min(cardIndex + 1, componentes.length - cardsToShow);
        setCardIndex(newIndex);
    };
    return (
        <div className='CarruselClass'>
            <button onClick={previusCard}>{'<'}</button>
            <div className='Container'>
                { componentes.length === 0 ? <p>No hay productos</p> : componentes.slice(cardIndex, cardIndex + cardsToShow) }
            </div>
            <button onClick={goToNextSlide}>{'>'}</button>
        </div>
    );
}
